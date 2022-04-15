const rate = document.querySelectorAll(".rate");

const selected = rate.forEach((r) => {
  r.addEventListener("click", () => {
    sessionStorage.setItem("selectedItem", r.innerHTML);
  });
});