import Footer from './Footer';
import Header from './Header';
import { useState } from 'react';
import CartWrapper from './CartWrapper';
/** @import { Cart } from "./types/Cart" */

/**
 * 
 * @param {{ cart: Cart }} props 
 */
function Contact({ cart }) {
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
        <main className="page-main-content gap-y-8 pb-8">
          <h1 className="page-heading">Contact</h1>
          <form className="contact-form font-mont max-w-full px-1 w-xs">
            <label htmlFor="name">Name:</label><br />
            <input className='mb-4 border border-gray-400 rounded-xs' name="name" /><br />
            <label htmlFor="email">Email:</label><br />
            <input className='mb-4 border border-gray-400 rounded-xs' name="email" type="email" /><br />
            <label htmlFor="message">Message:</label><br />
            <textarea className='border border-gray-400 rounded-xs' name="message"></textarea><br />
            <button className="font-mont bg-gray-300 rounded-xs" type="submit">Submit</button>
          </form>
          <iframe className="w-full max-w-2xl" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.7354113969427!2d-73.96710402524286!3d40.76784383419705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258eb899f0889%3A0xb5e90aa7d877ee1f!2sHunter%20College!5e0!3m2!1sen!2sus!4v1773014318224!5m2!1sen!2sus" width="600" height="450" style={{border:0}} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </main>
      </CartWrapper>
      <Footer />
    </>
  );
}

export default Contact;