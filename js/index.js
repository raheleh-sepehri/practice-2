const rate = document.querySelectorAll(".rate");
const btn = document.querySelector(".button");

const selected = rate.forEach((r) => {
  const selectedItem = () => {
    removeStyle();
    r.classList.add("toggle");
    sessionStorage.setItem("selectedItem", r.innerHTML);
  };
  const removeStyle = () => {
    r.classList.remove("toggle");
  };
  r.addEventListener("click", selectedItem);
});
btn.addEventListener("click", () => {
  console.log(sessionStorage.getItem("selectedItem"));
  if (sessionStorage.getItem("selectedItem") === null) {
    alert("select a number");
    btn.href = "https://raheleh-sepehri.github.io/practice-2/";
  }
});
