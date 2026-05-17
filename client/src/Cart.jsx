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
      <div className="flex flex-col items-center min-h-250 font-mont" id="cart">
        <div className="flex justify-end pt-3 px-5 w-full absolute">
          <button className="flex bg-inherit w-12 h-12 cursor-pointer" id="cart-close-button" onClick={closeCart}>
            <img alt="close" src={blackCloseIcon} />
          </button>
        </div>

        <h1 className="page-heading">CART</h1>
        <div className="w-125 px-2 max-w-full">
          <div className="flex flex-col items-center gap-y-3" id="cart-items">
            {cart.list().map(item => (<CartItem item={item} cart={cart} key={item.name} />))}
          </div>
          <Total cart={cart} />
          <div className="flex justify-between w-full">
            {cart.items.size === 0 ?
              <></> :
              <>
                <button className="my-2 p-3 rounded-[5px] text-white cursor-pointer font-bold bg-[#800] hover:bg-[#600]" onClick={cart.clear}>
                  CLEAR CART
                </button>
              </>
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
      <div className="flex rounded-sm w-full bg-[#f2efea] overflow-hidden">
        <img className="w-25 object-cover" alt={name} src={image} />
        <div className="flex grow justify-between p-4">
          <div className="flex flex-col items-start gap-y-2 text-sm">
            <h3 className="font-bold text-base">{name}</h3>
            <div className="cart-item-total">${total}</div>
            <div className="flex flex-wrap gap-x-[1ch]">
              <span>Quantity: {quantity}</span><span>{unitPrice}</span>
            </div>
          </div>
          <div className="flex h-full items-center">
            <button className="flex bg-[#f00] w-10 h-10 rounded-[20px] cursor-pointer hover:bg-[#d00]" onClick={onClickRemove}>
              <img className="text-white" alt="remove" src={whiteCloseIcon} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

/**
 * 
 * @param {{ cart: CartData }} props
 */
function Total({ cart }) {
  if (cart.count() === 0) {
    return (
      <div className="flex justify-center mt-2">Nothing in cart</div>
    );
  } else {
    const total = cart.list().reduce(
      (total, item) => total + item.price * item.quantity,
      0,
    );
    return (
      <div className="flex justify-start mt-2 font-bold">Total: ${(total / 100).toFixed(2)}</div>
    );
  }
}

export default Cart;