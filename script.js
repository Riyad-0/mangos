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

function sliderAdvance(n) {
  const sliderImages = document.getElementsByClassName("slider-image");
  for (let i = 0; i < sliderImages.length; i++) {
    if (sliderImages[i].classList.contains("current-slider-image")) {
      sliderImages[i].className = "slider-image";
      sliderImages[(i + n) % sliderImages.length].className = "slider-image current-slider-image";
      break;
    }
  }
}

function sliderPrev() {
  sliderAdvance(-1);
}

function sliderNext() {
  sliderAdvance(1);
}


document.getElementById("nav-menu-icon").addEventListener("click", toggleNavMenu);

document.getElementById("slider-prev-button").addEventListener("click", sliderPrev);
document.getElementById("slider-next-button").addEventListener("click", sliderNext);