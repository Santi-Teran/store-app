import axios from "axios";
import Link from "next/link";
import { useState } from "react";
import CartProduct from "src/components/CartProduct";
import { useShoppingCart } from "use-shopping-cart";

const CartPage = () => {

  const [redirecting, setRedirecting] = useState(false);
  const { cartCount, clearCart, formattedTotalPrice, cartDetails, redirectToCheckout } = useShoppingCart();

  async function onCheckout() {
    if (cartCount > 0) {
      try {
        setRedirecting(true);
        const { id } = await axios
          .post('/api/checkout-sessions', cartDetails)
          .then((res) => res.data);
        const result = await redirectToCheckout(id);
        if (result?.error) {
          console.log(result)
        }
      } catch (error) {
        console.log(error.message)
      } finally {
        setRedirecting(false)
      }
    }
  }

  return (
    <div className="container xl:max-w-screen-xl mx-auto py-12 px-6">
      {cartCount > 0 ? (
        <div>
          <h2 className="text-4xl font-semibold">Your shopping cart</h2>
          <p className="mt-1 text-xl">
            {cartCount} items {' '}
            <button onClick={() => clearCart()} className="opacity-50 hover:opacity-100 text-base">(Clear All)</button>
          </p>
        </div>
      ) : (
        <div>
          <h2 className="text-4xl font-semibold">Your shopping cart is empty</h2>
          <p className="mt-1 text-xl">
            Check out our awesome products{' '}
            <Link href='/' className="text-red-500 underline">here!</Link>
          </p>
        </div>
      )}

      {cartCount > 0 && 
        <div className="mt-12 space-y-4">
          {Object.entries(cartDetails).map(([productId, product]) => (
            <CartProduct key={productId} product={product} />
          ))}
          <div className="flex flex-col items-end border-t py-4 mt-8">
            <p className="text-xl">
              Total: {' '}
              <span className="font-semibold">{formattedTotalPrice}</span>
            </p>
            <button disabled={redirecting} onClick={onCheckout} className="rounded bg-yellow-500 hover:bg-yellow-600 py-2 px-6 transition disabled:opacity-50 disabled:cursor-not-allowed mt-4 max-w-max">
              {redirecting ? 'Redirecting...' : 'Go to Checkout'}
            </button>
          </div>
        </div>
      }
    </div>
  )
};

export default CartPage;