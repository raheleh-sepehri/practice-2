const result = document.querySelector("#selected");

// console.log(sessionStorage.getItem("selectedItem"));
if (sessionStorage.getItem("selectedItem") !== null) {
  var selectedItem = JSON.parse(sessionStorage.getItem("selectedItem"));
  result.innerHTML = sessionStorage.getItem("selectedItem");
  console.log(selectedItem);
}
