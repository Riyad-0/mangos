import Footer from './Footer';
import Header from './Header';
import { useEffect, useState } from 'react';
import CartWrapper from './CartWrapper';
/** @import { MenuItem } from "./types/MenuItem" */
/** @import { Cart } from "./types/Cart" */

/**
 * @typedef {{
 *   heading: string
 *   items: MenuItem[]
 * }} MenuSection
 */

async function fetchMenu() {
  const res = await fetch("/api/menu");
  const body = await res.json();
  if (body.result === "success") {
    return body.menu;
  } else {
    return null;
  }
}

/**
 * 
 * @param {{ cart: Cart }} props 
 */
function Menu({ cart }) {
  const [cartOpened, setCartOpened] = useState(false);
  const [sections, setSections] = useState(/** @type {MenuSection[] | null} */ (null));

  useEffect(() => {
    fetchMenu().then(setSections);
  }, []);
  function onClickCartButton() {
    setCartOpened(!cartOpened);
  }
  function onClickCloseCartButton() {
    setCartOpened(false);
  }
  return (
    <>
      {/* Fonts: Montserrat, Playpen Sans Thai */}
      {/* <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Playpen+Sans+Thai:wght@100..800&display=swap" rel="stylesheet" />    <link rel="stylesheet" href="styles.css" /> */}
      <Header cart={cart} onClickCartButton={onClickCartButton} />
      <CartWrapper cartOpened={cartOpened} cart={cart} closeCart={onClickCloseCartButton}>
        <main className="page-main-content">
          <h1 className="page-heading">MENU</h1>
          {sections && sections.map(section => (<MenuSection section={section} cart={cart} key={section.heading} />))}
        </main>
      </CartWrapper>
      <Footer />
    </>
  );
}

/**
 * 
 * @param {{ section: MenuSection, cart: Cart }} props 
 */
function MenuSection({ section, cart }) {
  return (
    <>
      <section className="flex flex-col items-center w-full mx-4 mb-6">
        <h2 className="text-xl my-4 font-mont font-bold">{section.heading}</h2>
        <div className="menu-grid">
          {section.items.map(item => (<MenuItem item={item} cart={cart} key={item.name} />))}
        </div>
      </section>
    </>
  );
}

/**
 * 
 * @param {{ item: MenuItem, cart: Cart }} props 
 */
function MenuItem({ item, cart }) {
  const found = cart.items.get(item.name);
  const count = (found === undefined || found.quantity === 0) ?
    "" :
    `${found.quantity} in cart`;

  function onClickAdd() {
    cart.add(item);
  }
  const price = (item.price / 100).toFixed(2);
  return (
    <>
      <div className="bg-[#f2efea] cursor-pointer overflow-hidden w-80 rounded-lg" onClick={onClickAdd}>
        <img className="w-80 h-48 object-cover" alt={item.name} src={item.image} />
        <div className="flex flex-col p-4 font-mont">
          <h3 className="mb-8 font-bold text-[1.2rem]">{item.name}</h3>
          <div className="mb-1">${price}</div>
          <div className="align-baseline font-bold flex justify-end gap-x-4">
            <div className='flex items-center'>{count}</div>
            <button className="cursor-pointer px-10 py-3 text-lg font-bold rounded-sm text-white bg-[#800] hover:bg-[#600]" onClick={onClickAdd}>ADD</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Menu;