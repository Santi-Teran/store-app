import Link from "next/link"
import Logo from "./Logo"
import { ShoppingCartIcon } from '@heroicons/react/24/solid'
import { useShoppingCart } from "use-shopping-cart"

const Header = () => {

  const { formattedTotalPrice, cartCount } = useShoppingCart();

  return (
    <header className="sticky top-0 bg-neutral-800 text-white z-10 shadow shadow-black">
      <div className="container mx-auto p-4 flex justify-between">
        <Logo />
        <Link href='/cart' className="flex items-center space-x-1 hover:text-gray-400">
          <div className="relative">
            <ShoppingCartIcon className="w-7 h-7 flex-shrink-0"/>
          </div>
          <p className="text-lg flex items-center gap-x-1">
            {formattedTotalPrice}
            <span className="text-sm">({cartCount})</span>
          </p>
        </Link>
      </div>
    </header>
  )
};

export default Header;