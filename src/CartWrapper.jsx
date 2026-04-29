import Cart from "./Cart";
/** @import { Cart as CartData } from "./types/Cart" */
/** @import { CartItem } from "./types/CartItem" */
/** @import JSX from react */

/**
 * 
 * @param {{
 *  cartOpened: boolean
 *  cart: CartData
 *  closeCart: () => void
 *  children: JSX.Element
 * }} props  
 */
function CartWrapper({
  cartOpened,
  cart,
  closeCart,
  children,
}) {
  return (
    <>
      {cartOpened ?
        <Cart cart={cart} closeCart={closeCart}/> :
        children
      }
    </>
  );
}

export default CartWrapper;