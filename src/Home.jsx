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
          <div className="hero">
            <img className="hero-image" src={heroRibeye} />
            <div className="hero-foreground-container">
              <div className="hero-foreground">
                <h1 className="hero-foreground-heading">mango's</h1>
                <Link className="view-menu-button" to="/menu">VIEW MENU</Link>
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