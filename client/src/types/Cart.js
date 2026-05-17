/** @import { CartItem } from "./CartItem" */
/** @import { MenuItem } from "./MenuItem" */

/**
 * @typedef {{
 *   items: Map<string, CartItem>
 *   list: () => CartItem[]
 *   count: () => number
 *   add: (item: MenuItem) => void
 *   remove: (name: string) => void
 *   clear: () => void
 *   clearLocally: () => void
 * }} Cart;
 */