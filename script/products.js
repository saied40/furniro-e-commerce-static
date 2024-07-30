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
}

function resetZoom() {
  imgZoom.style.transformOrigin = `center`;
  imgZoom.style.transform = "scale(1)";
}

const imgContZoom = document.getElementById("imgContZoom");
const imgsModalCont = document.getElementById("imgsModalCont");

imgContZoom?.addEventListener("mousemove", (e) => startZoom(e));
imgContZoom?.addEventListener("mouseleave", resetZoom);

[...imgsModalCont?.children].forEach((img) =>
  img.addEventListener("click", () => {
    imgZoom.src = img.src;
    [...imgsModalCont?.children].forEach((img) =>
      img.classList.remove("tw-active")
    );
    img.classList.add("tw-active");
  })
);

const plus = document.getElementById("plusModal");
const minus = document.getElementById("minusModal");
const countEle = document.getElementById("countModal");
let count = 1;

plus.addEventListener("click", (_) => {
  count++;
  countEle.innerText = count;
});
minus.addEventListener("click", (_) => {
  count > 0 && count--;
  countEle.innerText = count;
});
