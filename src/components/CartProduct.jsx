import Image from "next/image"
import Link from "next/link"
import { PlusSmallIcon, MinusSmallIcon, XCircleIcon } from '@heroicons/react/24/outline';
import { useShoppingCart } from "use-shopping-cart";

const CartProduct = ({ product }) => {

  const { setItemQuantity, removeItem } = useShoppingCart();

  return (
    <div className="flex justify-between space-x-4 hover:shadow-lg hover:border-opacity-50 border border-opacity-0 rounded-md p-4 bg-white">

      <Link href={`/products/${product.id}`} className="flex items-center space-x-4 group">
        <div className="relative w-20 h-20 group-hover:scale-110 transition">
          <Image 
            src={product.image}
            alt={product.name}
            fill
            sizes="100%"
          />
        </div>
        <p className="font-semibold text-xl group-hover:underline text-black">{product.name}</p>
      </Link>

      <div className="flex items-center">
        <div className="flex items-center space-x-3">
          <button onClick={() => setItemQuantity(product.id, product.quantity - 1)} disabled={product.quantity <= 1} className='p-1 rounded-md text-black hover:bg-red-600 hover:text-white transition disabled:cursor-not-allowed'>
            <MinusSmallIcon className='w-6 h-6 flex-shrink-0'/>
          </button>
          <p className='font-semibold text-xl text-black'>{product.quantity}</p>
          <button onClick={() => setItemQuantity(product.id, product.quantity + 1)} className='p-1 rounded-md text-black hover:bg-green-600 hover:text-white transition'>
            <PlusSmallIcon className='w-6 h-6 flex-shrink-0'/>
          </button>         
        </div>

        <p className="font-semibold text-xl ml-16 text-black">{product.formattedPrice}</p>

        <button onClick={() => removeItem(product.id)} className="ml-3 text-black hover:text-red-600">
          <XCircleIcon className="w-7 h-7 flex-shrink-0 opacity-50 hover:opacity-100 transition"/>
        </button>
      </div>
    </div>
  )
}

export default CartProduct