import Image from "next/image"
import Link from "next/link"

const Logo = () => {
  return (
    <Link href='/' className="flex items-center space-x-2">
      <Image src='/logo.png' alt="Logo" width={42} height={42}/>
      <span className="hidden md:inline-block font-extrabold text-3xl">
        Store App
      </span>
    </Link>
  )
};

export default Logo