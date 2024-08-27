function storeCategoryIndex(i) {
  localStorage("categoryIndex", i);
}

let longButtonIndex =
  //let search = document.getElementById("search-index");

  search.addEventListener("click", function (event) {
    event.preventDefault();
    if (
      localStorage.getItem("cena-od") == "Cena od" &&
      localStorage.getItem("cena-do") == "Cena do"
    ) {
      error();
    } else {
      window.location = "pages/search.html";
    }
  });
