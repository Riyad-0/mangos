function onClickAdd(e) {
  const nameElement = e.currentTarget.getElementsByClassName("menu-item-name")[0];
  const name = nameElement.innerText;

  const existing = cartItems.get(name);
  if (existing !== undefined) {
    existing.quantity += 1;
    onUpdateCartItems();
    return;
  }

  const priceElement = e.currentTarget.getElementsByClassName("price")[0];
  const price = Number.parseFloat(priceElement.innerText.slice(1)) * 100;
  
  const imageElement = e.currentTarget.getElementsByTagName("img")[0];
  const image = {
    alt: imageElement.alt,
    src: imageElement.src,
  };

  cartItems.set(name, { price, quantity: 1, image });
  onUpdateCartItems();
}

for (const menuItemCardElement of document.getElementsByClassName("menu-item-card")) {
  menuItemCardElement.addEventListener("click", onClickAdd);
}