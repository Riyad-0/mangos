import heroRibeye from './assets/hero-ribeye.jpg';
import Footer from './Footer';
import Header from './Header';
import { useState } from 'react';
import CartWrapper from './CartWrapper';
import Gallery from './Gallery';
import { Link } from 'react-router-dom';
/** @import { CartItem } from "./types/CartItem" */
/** @import { Cart } from "./types/Cart" */

/**
 * 
 * @param {{ cart: Cart }} props 
 */
function Home({ cart }) {
  const [cartOpened, setCartOpened] = useState(false);
  function onClickCartButton() {
    setCartOpened(!cartOpened);
  }
  function closeCart() {
    setCartOpened(false);
  }
  return (
    <>
      {/* Fonts: Montserrat, Playpen Sans Thai */}
      {/* <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Playpen+Sans+Thai:wght@100..800&display=swap" rel="stylesheet" />    <link rel="stylesheet" href="styles.css" /> */}
      <Header cart={cart} onClickCartButton={onClickCartButton} />
      <CartWrapper cartOpened={cartOpened} cart={cart} closeCart={closeCart}>
        <main>
          <div className="relative">
            <img className="block w-full min-h-80 object-cover" src={heroRibeye} />
            <div className="flex items-center justify-center top-0 left-0 absolute w-full h-full bg-[rgba(0,0,0,0.1)]">
              <div className="flex flex-col gap-y-4 mb-[20%]">
                <h1 className="text-5xl py-3 font-play font-bold text-white">mango's</h1>
                <Link className="flex justify-center rounded-sm p-4 font-mont font-bold bg-white text-black hover:bg-[lightgray]" to="/menu">VIEW MENU</Link>
              </div>
            </div>
          </div>
          <Gallery />
        </main>
      </CartWrapper>
      <Footer />
    </>
  );
}

export default Home;