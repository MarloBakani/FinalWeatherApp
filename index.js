function searchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#searchFormInput");
  let cityElement = document.querySelector("h1");
  cityElement.innerHTML = searchInput.value;
}

let searchForm = document.querySelector("#searchform");
searchForm.addEventListener("submit", searchSubmit);
