function resetFilter() {
  localStorage.setItem("znamka", "Vse znamke");
  localStorage.setItem("model", "Vsi modeli");
  localStorage.setItem("gorivo", "Gorivo");
  localStorage.setItem("prevozenih", "Prevozenih km do");
  localStorage.setItem("cena-od", "Cena od");
  localStorage.setItem("cena-do", "Cena do");
  localStorage.setItem("letnik-od", "Letnik od");
  localStorage.setItem("letnik-do", "Letnik do");
  // alert("RESETING !");
  console.log("RESETING :::::::::::::");
  // alert("inside! /////////");
  showLocals();
}

let pageButtons = document.getElementsByClassName("row-2-button");

//alert("pages length: " + pageButtons.length);

for (let i = 0; i < pageButtons.length; i++) {
  pageButtons[i].addEventListener("click", function (event) {
    event.preventDefault();

    resetFilter();
    // alert(
    //  "CURRENT: " + pageButtons[i].querySelectorAll("a")[0].getAttribute("href")
    //);

    window.location = pageButtons[i].querySelectorAll("a")[0].href;
  });
}
