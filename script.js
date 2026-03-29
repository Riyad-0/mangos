
function loadCartItems() {
  const serializedCartItems = localStorage.getItem("cartItems");
  if (serializedCartItems === null) {
    return new Map();
  } else {
    return new Map(JSON.parse(serializedCartItems));
  }
}

const clearCartButton = document.getElementById("clear-cart-button");

const cartItems = loadCartItems();

function storeCartItems() {
  localStorage.setItem("cartItems", JSON.stringify([...cartItems]));
}

function toggleNavMenu() {
  let menuNav = document.getElementById("menu-nav");
  if (menuNav !== null) {
    switch (menuNav.className) {
      case "menu-nav-closed": {
        menuNav.className = "menu-nav-open";
        break;
      }
      case "menu-nav-open": {
        menuNav.className = "menu-nav-closed";
      }
    }
  }
}

function toggleCart() {
  const cartElement = document.getElementById("cart");
  if (cartElement.className === "cart-hidden") {
    showCart();
  } else {
    hideCart();
  }
}

let bodyChildren = [];
let removed = null;
function showCart() {
  bodyChildren = [];
  for (let i = 0; i < document.body.children.length; i++) {
    bodyChildren.push(document.body.children[i]);
  }
  const cartElement = document.getElementById("cart");
  cartElement.className = "cart-shown";
  const toRemove = cartElement.nextElementSibling;
  console.log(toRemove);
  if (toRemove !== null) {
    toRemove.remove();
  }
  removed = toRemove;
}

function hideCart() {
  console.log(removed);
  const cartElement = document.getElementById("cart");
  cartElement.className = "cart-hidden";
  if (removed !== null) {
    cartElement.after(removed);
    removed = null;
  }
  updateMenuItemCounts();
  // document.body.replaceChildren(...bodyChildren);
}

function newCartItemElement(name, price, quantity, image) {
  const total = (price * quantity / 100).toFixed(2);
  const unitPrice = quantity > 1 ?
    `($${(price / 100).toFixed(2)} each)` :
    "";

  return `<div class="cart-item" id="cart-item-${name}">
    <img alt="${image.alt}" src="${image.src}" />
    <div class="cart-item-right">
      <div class="cart-item-text-container">
        <h3 class="cart-item-name">${name}</h3>
        <div class="cart-item-total">$${total}</div>
        <div class="cart-item-quantity">
          <span>Quantity: ${quantity}</span> <span>${unitPrice}</span>
        </div>
      </div>
      <div class="remove-cart-item-button-container">
        <button class="remove-cart-item-button" data-name="${name}">
          <img alt="remove" src="assets/x-icon-white.svg" />
        </button>
      </div>
    </div>
  </div>`;
}

function onClickRemove(e) {
  const removeButton = e.currentTarget;
  const name = removeButton.getAttribute("data-name");
  cartItems.delete(name);
  onUpdateCartItems();
}

function onUpdateCartItems() {
  storeCartItems();
  const cartItemsElement = document.getElementById("cart-items");
  let total = 0;
  let cartItemCount = 0;
  let innerHTML = "";
  for (const [name, { price, quantity, image }] of cartItems) {
    total += price * quantity;
    cartItemCount += quantity;
    innerHTML += newCartItemElement(
      name,
      price,
      quantity,
      image,
    );
  }
  cartItemsElement.innerHTML = innerHTML;
  const removeButtons = document.getElementsByClassName("remove-cart-item-button");
  for (const removeButton of removeButtons) {
    removeButton.addEventListener("click", onClickRemove);
  }
  const totalElement = document.getElementById("cart-total");
  if (cartItems.size > 0) {
    totalElement.innerText = "Total: $" + (total / 100).toFixed(2);
    totalElement.className = "cart-total";
  } else {
    totalElement.innerText = "Nothing in cart";
    totalElement.className = "cart-total-empty";
  }
  if (cartItems.size > 0) {
    clearCartButton.className = "clear-cart-button-shown";
  } else {
    clearCartButton.className = "clear-cart-button-hidden";
  }
  const cartItemCounter = document.getElementById("cart-item-counter");
  if (cartItemCount > 0) {
    cartItemCounter.className = "cart-item-counter-shown";
    if (cartItemCount <= 9) {
      cartItemCounter.innerText = cartItemCount;
    } else {
      cartItemCounter.innerText = "";
    }
  } else {
    cartItemCounter.className = "cart-item-counter-hidden";
    cartItemCounter.innerText = "";
  }
  updateMenuItemCounts();
}

function updateMenuItemCounts() {
  for (const menuItemCardElement of document.getElementsByClassName("menu-item-card")) {
    const nameElement = menuItemCardElement.getElementsByClassName("menu-item-name")[0];
    const name = nameElement.innerText;
    const cartItem = cartItems.get(name);
    const menuItemCountElement = menuItemCardElement.getElementsByClassName("menu-item-count")[0];
    if (cartItem === undefined) {
      menuItemCountElement.innerText = "";
    } else {
      menuItemCountElement.innerText = `${cartItem.quantity} in cart`;
    }
  }
}

function clearCart() {
  cartItems.clear();
  onUpdateCartItems();
}

document.getElementById("nav-menu-icon").addEventListener("click", toggleNavMenu);
document.getElementById("cart-button").addEventListener("click", toggleCart);
document.getElementById("cart-close-button").addEventListener("click", hideCart);

clearCartButton.addEventListener("click", clearCart);

onUpdateCartItems();