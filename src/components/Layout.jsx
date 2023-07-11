import { Comfortaa } from 'next/font/google';
import Header from './Header';
import Footer from './Footer';
import Meta from './Meta';

const inter = Comfortaa({
  subsets:['latin'],
  variable:'--font-inter',
})

const AppLayout = ({ children }) => {
  return (
    <div className={`${inter.variable} font-sans min-h-screen flex flex-col`}>
      <Meta />
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  )
};

export default AppLayout