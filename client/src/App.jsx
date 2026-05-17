// Supports weights 100-900
import '@fontsource-variable/montserrat/wght.css';
// Supports weights 100-800
import '@fontsource-variable/playpen-sans-thai/wght.css';
import './global.css';
import {
  BrowserRouter as Router,
  Routes, Route, Link
} from 'react-router-dom';
import Home from './Home';
import Menu from './Menu';
import { useEffect, useState } from 'react';
import About from './About';
import Contact from './Contact';
/** @import { CartItem } from "./types/CartItem" */
/** @import { Cart } from "./types/Cart" */

function InsideRouter() {
  const [cartItems, setCartItems] = useState(/** @type {Map<string, CartItem>} */(loadCartItems()));

  /** @type {Cart} */
  const cart = {
    items: cartItems,
    add(item) {
      const newCartItems = new Map(cartItems);
      const existing = newCartItems.get(item.name);
      const quantity = (existing === undefined) ? 1 : (existing.quantity + 1);
      newCartItems.set(item.name, { ...item, quantity });
      setCartItems(newCartItems);
      updateCart(newCartItems);
    },
    remove(name) {
      const existing = cartItems.get(name);
      if (existing === undefined) return;
      const newCartItems = new Map(cartItems);
      if (existing.quantity > 1) {
        newCartItems.set(existing.name, { ...existing, quantity: existing.quantity - 1 });
      } else {
        newCartItems.delete(existing.name);
      }
      setCartItems(newCartItems);
      updateCart(newCartItems);
    },
    clear() {
      const newCartItems = new Map();
      setCartItems(newCartItems);
      updateCart(newCartItems);
    },
    clearLocally() {
      const newCartItems = new Map();
      setCartItems(newCartItems);
    },
    list() {
      return [...cartItems.values()];
    },
    count() {
      return this.list().reduce((count, item) => count + item.quantity, 0);
    },
  };
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify([...cartItems]));
  }, [cartItems]);

  return (
    <>
      {/* <Link to="/profile">profile</Link> */}
      <Routes>
        <Route path="/" element={<Home cart={cart} />} />
        <Route path="/menu" element={<Menu cart={cart} />} />
        <Route path="/about" element={<About cart={cart} />} />
        <Route path="/contact" element={<Contact cart={cart} />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <InsideRouter />
    </Router>
  );
}

/**
 * 
 * @returns {Map<string, CartItem>}
 */
function loadCartItems() {
  const serializedCartItems = localStorage.getItem("cartItems");
  if (serializedCartItems === null) {
    return new Map();
  } else {
    return new Map(JSON.parse(serializedCartItems));
  }
}

async function updateCart(cartItems) {
  const items = [...cartItems.values()].map(item => {
    return {
      name: item.name,
      quantity: item.quantity,
    };
  });
  await fetch("/api/cart", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      items
    }),
  })
}

export default App;