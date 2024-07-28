openFavorites.addEventListener("click", _ => {
  [...navTab.children].forEach((item) => item.classList.remove("active"));
  [...navTabContent.children].forEach(item => item.classList.remove("active", "show"));
  // favoritesTab.classList.add("active");
  favoritesTab.click();
});

openShoppingCart.addEventListener("click", _ => {
  [...navTab.children].forEach((item) => item.classList.remove("active"));
  [...navTabContent.children].forEach(item => item.classList.remove("active", "show"));
  // shoppingTab.classList.add("active");
  shoppingTab.click();
});

[...dropdownMenu.children].forEach(item => item.addEventListener('click', ()=> {
  dropdownHead.innerText = item.innerText;
}));

const setMainTop = _ => document.getElementById("main").style.top = document.getElementById("header").offsetHeight+'px';
window.addEventListener("resize", setMainTop);
window.addEventListener("load", setMainTop);

function startZoom(e) {
  let x, y;

  if (e.clientX - e.target.offsetLeft >= e.target.clientWidth) {
    x = e.target.clientWidth;
  } else {
    x = e.clientX - e.target.offsetLeft;
  }

  if (e.clientY - e.target.offsetTop >= e.target.clientHeight) {
    y = e.target.clientHeight;
  } else {
    y = e.clientY - e.target.offsetTop;
  }

  imgZoom.style.transformOrigin = `${x}px ${y}px`;
  imgZoom.style.transform = "scale(2)";
};

function resetZoom() {
  imgZoom.style.transformOrigin = `center`;
  imgZoom.style.transform = "scale(1)";
};

imgContZoom.addEventListener("mousemove", (e) => startZoom(e));
imgContZoom.addEventListener("mouseleave", resetZoom);

[...imgsModalCont.children].forEach(img => img.addEventListener("click", () => {
  imgZoom.src = img.src;
  [...imgsModalCont.children].forEach(img => img.classList.remove("tw-border", "tw-border-main"));
  img.classList.add("tw-border", "tw-border-main");
}));

console.log("all good!");

const plus = document.getElementById("plusModal"),
  minus = document.getElementById("minusModal"),
  countEle = document.getElementById("countModal");
let count = 1;

plus.addEventListener("click", _ => {
  countEle.innerText = count++;
});
minus.addEventListener("click", _ => {
  count > 0 && (countEle.innerText = count--);
});
