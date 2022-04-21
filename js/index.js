const rate = document.querySelectorAll(".rate");

const selected = rate.forEach((r) => {
  r.addEventListener("click", () => {
    sessionStorage.setItem("selectedItem", r.innerHTML);
    window.open("http://127.0.0.1:5500/result.html");
  });
});
