import blackCloseIcon from "./assets/x-icon-black.svg";
import whiteCloseIcon from "./assets/x-icon-white.svg";
/** @import { CartItem } from "./types/CartItem" */
/** @import { Cart as CartData } from "./types/Cart" */

/**
 * 
 * @param {CartData} cart
 * @returns {string}
 */
function totalText(cart) {
  if (cart.count() === 0) {
    return "Nothing in cart"
  } else {
    const total = cart.list().reduce(
      (total, item) => total + item.price * item.quantity,
      0,
    );
    return "Total: $" + (total / 100).toFixed(2)
  }
}

/**
 * 
 * @param {{
 *   cart: CartData
 *   closeCart: () => void
 * }} props 
 * @returns 
 */
function Cart({ cart, closeCart }) {
  const total = totalText(cart);
  return (
    <>
      <div className="cart" id="cart">
        <div className="cart-close-button-container">
          <button className="cart-close-button" id="cart-close-button" onClick={closeCart}>
            <img alt="close" src={blackCloseIcon} />
          </button>
        </div>

        <h1 className="page-heading">CART</h1>
        <div className="cart-main">
          <div className="cart-items" id="cart-items">
            {cart.list().map(item => (<CartItem item={item} cart={cart} key={item.name} />))}
          </div>
          <div className="cart-total-empty" id="cart-total">{total}</div>
          <div className="clear-cart-button-container">
            {cart.items.size === 0 ?
              <></> :
              <button className="clear-cart-button font-bold bg-[#800] hover:bg-[#600]" onClick={cart.clear}>
                CLEAR CART
              </button>
            }
          </div>
        </div>
      </div>
    </>
  );
}

/**
 * 
 * @param {{ item: CartItem, cart: CartData }} props 
 */
function CartItem({ item: { name, image, price, quantity }, cart }) {
  const total = (price * quantity / 100).toFixed(2);
  const unitPrice = quantity > 1 ?
    `($${(price / 100).toFixed(2)} each)` :
    "";
  
  function onClickRemove() {
    cart.remove(name);
  }

  return (
    <>
      <div className="cart-item">
        <img alt={name} src={image} />
        <div className="cart-item-right">
          <div className="cart-item-text-container">
            <h3 className="cart-item-name">{name}</h3>
            <div className="cart-item-total">${total}</div>
            <div className="cart-item-quantity">
              <span>Quantity: {quantity}</span> <span>{unitPrice}</span>
            </div>
          </div>
          <div className="remove-cart-item-button-container">
            <button className="remove-cart-item-button" onClick={onClickRemove}>
              <img alt="remove" src={whiteCloseIcon} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;