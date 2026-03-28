let cartItems = new Map();

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
  // document.getElementById("main").remove();
  const toRemove = cartElement.nextElementSibling;
  console.log(toRemove);
  if (toRemove !== null) {
    toRemove.remove();
  }
  removed = toRemove;
  // document.body.removeChild(document.getElementById("main"));
  // document.body.innerHTML = cartElement;
}

function hideCart() {
  // const cartElement = document.getElementById("cart");
  // cartElement.className = "cart-hidden";
  console.log(removed);
  const cartElement = document.getElementById("cart");
  cartElement.className = "cart-hidden";
  if (removed !== null) {
    cartElement.after(removed);
    removed = null;
  }
  // document.body.replaceChildren(...bodyChildren);
}

document.getElementById("nav-menu-icon").addEventListener("click", toggleNavMenu);

document.getElementById("cart-button").addEventListener("click", toggleCart);
document.getElementById("cart-close-button").addEventListener("click", hideCart);
