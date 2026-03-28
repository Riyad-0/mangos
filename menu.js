
function addToCart(name, price) {
  const existing = cartItems.get(name);
  if (existing === undefined) {
    cartItems.set(name, { price, quantity: 1 }); 
  } else {
    existing.quantity += 1;
  }
}

function onClickAdd(e) {
  const nameElement = e.currentTarget.getElementsByClassName("menu-item-name")[0];
  const name = nameElement.innerText;

  const priceElement = e.currentTarget.getElementsByClassName("price")[0];
  const price = Number.parseFloat(priceElement.innerText.slice(1)) * 100;
  
  addToCart(name, price);
}

for (const menuItemCardElement of document.getElementsByClassName("menu-item-card")) {
  menuItemCardElement.addEventListener("click", onClickAdd);
  // menuItemCardElement.addEventListener("click", e => {
  //   e.target.
  // });
}