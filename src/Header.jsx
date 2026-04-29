import headerLogo from './assets/mango.png';
import cartIcon from './assets/cart.svg';
import { useState } from 'react';
import { Link } from 'react-router-dom';
/** @import { Cart } from "./types/Cart" */

/**
 * 
 * @param {{
 *   cart: Cart
 *   onClickCartButton: () => void
 * }} props 
 */
function Header({ cart, onClickCartButton }) {
  const [navMenuOpened, setNavMenuOpened] = useState(false);
  const navMenuClass = navMenuOpened ? "menu-nav-open" : "menu-nav-closed";
  function onClickNavMenuButton() {
    setNavMenuOpened(!navMenuOpened);
  }
  return (
    <>
      {/* Hamburger menu icon */}
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
      <header className="flex items-center justify-between w-full bg-black text-white text-[1.8rem] px-5 py-3">
        <a href="javascript:void(0);" className="nav-menu-icon" onClick={onClickNavMenuButton}>
          <i className="fa fa-bars"></i>
        </a>
        <Link className="flex items-center gap-x-3 text-white" to="/">
          <img className="w-12" alt="logo" src={headerLogo} />
          <div className="inline-flex flex-col">
            <span className="font-play font-bold">mango's</span>
            <span className="font-mont text-base">STEAKHOUSE</span>
          </div>
        </Link>
        <div className="flex gap-x-9 items-center">
          <nav className="header-nav">
            <Link className="header-nav-link" to="/">HOME</Link>
            <Link className="header-nav-link" to="/menu">MENU</Link>
            <Link className="header-nav-link" to="/about">ABOUT</Link>
            <Link className="header-nav-link" to="/contact">CONTACT</Link>
          </nav>
          <button className="bg-black cursor-pointer relative" id="cart-button" onClick={onClickCartButton}>
            <img className="w-12" alt="shopping cart" src={cartIcon} />
            {cart.count() > 0 ?
              <div className="cart-item-counter flex absolute bottom-2 right-0 bg-[#f00] justify-center items-center w-4 h-4 rounded-lg text-white font-mont" id="cart-item-counter">
                {cart.count() < 10 ?
                  `${cart.count()}` :
                  ""
                }
              </div> :
              <></>
            }
          </button>
        </div>
      </header>
      <nav className={navMenuClass} id="menu-nav">
        <Link className="menu-nav-link" to="/">Home</Link>
        <Link className="menu-nav-link" to="/menu">Menu</Link>
        <Link className="menu-nav-link" to="/about">About</Link>
        <Link className="menu-nav-link" to="/contact">Contact</Link>
      </nav>
    </>
  );
}

export default Header;