const result = document.querySelector("#selected");

result.innerHTML = sessionStorage.getItem("selectedItem");
// console.log(sessionStorage.getItem("selectedItem"));
if (sessionStorage.getItem("selectedItem") !== null) {
  var selectedItem = JSON.parse(sessionStorage.getItem("selectedItem"));
  console.log(selectedItem);
}
