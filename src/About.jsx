import Footer from './Footer';
import Header from './Header';
import { useState } from 'react';
import CartWrapper from './CartWrapper';
/** @import { Cart } from "./types/Cart" */

/**
 * 
 * @param {{ cart: Cart }} props 
 */
function About({ cart }) {
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
        <article className="page-main-content">
          <h1 className="page-heading">Our Story</h1>
          <p className='font-mont max-w-3xl indent-8 mx-4 mb-4 leading-7'>
            John Mango was just seven years old when his uncle, world-famous chef 
            Gordon Mango, showed him around the kitchen at Mango Steakhouse. It was 
            at that moment that John became obsessed with all things cooking. He 
            spent the next several years of his life training under his uncle and 
            traveling the world to discover what makes food truly great. 
          </p>
          <p className='font-mont max-w-3xl indent-8 mx-4 mb-4 leading-7'>
            Having inherited the restaurant from his uncle, John is committed to 
            delivering world-class culinary experiences to each and every 
            customer, backed by the Mango Mandate: if you do not finish your meal 
            with a smile on your face, you are free to leave without having to pay.
          </p>
          <p className='font-mont max-w-3xl indent-8 mx-4 mb-4 leading-7'>
            John and his uncle are also the founders of the Mango Foundation, 
            which donates food to impoverished families and underserved 
            communities throughout America. 5% of all company profits go straight 
            into the Mango Foundation. When you eat at Mango's, you make the world 
            (and your stomach) a better place.
          </p>
        </article>
      </CartWrapper>
      <Footer />
    </>
  );
}

export default About;