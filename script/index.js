let drops = document.getElementsByClassName("drop");
let downs = document.getElementsByClassName("down");
let h3 = document.querySelectorAll("#row-3 h3");
let firstTime = true;

let znamke = document.querySelectorAll("#znamka-dropdown li");
let models = document.querySelectorAll("#models-dropdown li");
znamke[0].style.display = "flex";

const dropdownsP = document.querySelectorAll(".dropdowns p");

let selected = document.querySelectorAll("#znamka-dropdown p");

function filterModel() {
  for (let i = 0; i < znamke.length; i++) {
    for (let j = 1; j < models.length; j++) {
      models[j].style.display = "none";
    }

    console.log("CURRENT ZNAMKA: " + selected[0].innerHTML.toString());

    switch (selected[0].innerHTML.toString()) {
      case "Volkswagen":
        console.log("--Volkswagen--");
        models[1].style.display = "flex";

        break;
      case "Škoda":
        console.log("--Škoda--");
        models[2].style.display = "flex";

        break;
      case "Hyundai":
        console.log("--Hyundai--");
        models[3].style.display = "flex";
        models[4].style.display = "flex";
        models[5].style.display = "flex";
        break;
      case "Opel":
        console.log("--Opel--");
        models[6].style.display = "flex";

        break;
      case "Citroen":
        console.log("--Citroen--");
        models[7].style.display = "flex";
        models[8].style.display = "flex";
        break;
      case "Audi":
        console.log("--Audi--");
        models[9].style.display = "flex";
        models[10].style.display = "flex";
        break;
      case "BMW":
        console.log("--BMW--");
        models[11].style.display = "flex";
        models[12].style.display = "flex";
        break;
      case "Renault":
        console.log("--Renault--");
        models[13].style.display = "flex";

        break;
      case "Mazda":
        console.log("--Mazda--");
        models[14].style.display = "flex";
        models[15].style.display = "flex";
        models[16].style.display = "flex";
        break;
    }
  }
}

for (let i = 0; i < znamke.length; i++) {
  znamke[i].addEventListener("click", function () {
    for (let j = 1; j < models.length; j++) {
      models[j].style.display = "none";
    }

    switch (znamke[i].innerHTML.toString()) {
      case "Volkswagen":
        console.log("--Volkswagen--");
        models[1].style.display = "flex";

        break;
      case "Škoda":
        console.log("--Škoda--");
        models[2].style.display = "flex";

        break;
      case "Hyundai":
        console.log("--Hyundai--");
        models[3].style.display = "flex";
        models[4].style.display = "flex";
        models[5].style.display = "flex";
        break;
      case "Opel":
        console.log("--Opel--");
        models[6].style.display = "flex";

        break;
      case "Citroen":
        console.log("--Citroen--");
        models[7].style.display = "flex";
        models[8].style.display = "flex";
        break;
      case "Audi":
        console.log("--Audi--");
        models[9].style.display = "flex";
        models[10].style.display = "flex";
        break;
      case "BMW":
        console.log("--BMW--");
        models[11].style.display = "flex";
        models[12].style.display = "flex";
        break;
      case "Renault":
        console.log("--Renault--");
        models[13].style.display = "flex";

        break;
      case "Mazda":
        console.log("--Mazda--");
        models[14].style.display = "flex";
        models[15].style.display = "flex";
        models[16].style.display = "flex";
        break;
    }
  });
}

function createLiList(parent) {
  let dropdowns = document.getElementsByClassName(parent);

  let liNodeList = dropdowns[0].querySelectorAll("li");

  const array1 = Array.from(liNodeList);
  let combinedArray = [];

  combinedArray = combinedArray.concat(array1);

  for (let i = 1; i < dropdowns.length; i++) {
    let liNodeList2 = dropdowns[i].querySelectorAll("li");

    const array2 = Array.from(liNodeList2);

    combinedArray = combinedArray.concat(array2);
  }

  return combinedArray;
}

function storeVariable(data, options) {
  for (let i = 0; i < options.length; i++) {
    options[i].addEventListener("click", function () {
      // alert(data + " +++ " + options[i].innerHTML);
      localStorage.setItem(data, options[i].innerHTML);
      showLocals();

      let parent = options[i].parentElement.parentElement.parentElement;

      parent.querySelectorAll("p")[0].innerHTML = options[i].innerHTML;
    });
  }
}

function start() {
  let znamkaOptions = createLiList("znamka-dropdown-class");
  let cenaOdOptions = createLiList("cena-od-dropdown");
  let cenaDoOptions = createLiList("cena-do-dropdown");
  let prevozenihOptions = createLiList("prevozenih-dropdown");
  let modelOptions = createLiList("model-dropdown-class");
  let letnikOdOptions = createLiList("letnik-od-dropdown");
  let letnikDoOptions = createLiList("letnik-do-dropdown");
  let gorivoOptions = createLiList("gorivo-dropdown");

  for (let i = 0; i < cenaOdOptions.length; i++) {
    cenaOdOptions[i].innerHTML = cenaOdOptions[i].innerHTML.replace("od", "");
    cenaOdOptions[i].innerHTML = cenaOdOptions[i].innerHTML.replace("$", "");
    cenaOdOptions[i].innerHTML = cenaOdOptions[i].innerHTML.replace("EUR", "");
    cenaOdOptions[i].innerHTML = cenaOdOptions[i].innerHTML.trim();
  }

  for (let i = 0; i < cenaDoOptions.length; i++) {
    cenaDoOptions[i].innerHTML = cenaDoOptions[i].innerHTML.replace("od", "");
    cenaDoOptions[i].innerHTML = cenaDoOptions[i].innerHTML.replace("$", "");
    cenaDoOptions[i].innerHTML = cenaDoOptions[i].innerHTML.replace("EUR", "");
    cenaDoOptions[i].innerHTML = cenaDoOptions[i].innerHTML.trim();
  }

  for (let i = 0; i < prevozenihOptions.length; i++) {
    prevozenihOptions[i].innerHTML = prevozenihOptions[i].innerHTML.replace(
      "do",
      ""
    );
    prevozenihOptions[i].innerHTML = prevozenihOptions[i].innerHTML.replace(
      "km",
      ""
    );
    prevozenihOptions[i].innerHTML = prevozenihOptions[i].innerHTML.trim();
  }

  for (let i = 0; i < letnikOdOptions.length; i++) {
    letnikOdOptions[i].innerHTML = letnikOdOptions[i].innerHTML.replace(
      "Letnik",
      ""
    );
    letnikOdOptions[i].innerHTML = letnikOdOptions[i].innerHTML.replace(
      "od",
      ""
    );
    letnikOdOptions[i].innerHTML = letnikOdOptions[i].innerHTML.trim();
  }
  for (let i = 0; i < letnikDoOptions.length; i++) {
    letnikDoOptions[i].innerHTML = letnikDoOptions[i].innerHTML.replace(
      "Letnik",
      ""
    );
    letnikDoOptions[i].innerHTML = letnikDoOptions[i].innerHTML.replace(
      "do",
      ""
    );
    letnikDoOptions[i].innerHTML = letnikDoOptions[i].innerHTML.trim();
  }

  storeVariable("znamka", znamkaOptions);
  storeVariable("cena-od", cenaOdOptions);
  storeVariable("cena-do", cenaDoOptions);
  storeVariable("prevozenih", prevozenihOptions);
  storeVariable("model", modelOptions);
  storeVariable("letnik-od", letnikOdOptions);
  storeVariable("letnik-do", letnikDoOptions);
  storeVariable("gorivo", gorivoOptions);
}
///////////////////////////////////////////

//console.log("LENGTH: " + drops.length);

for (let i = 0; i < drops.length; i++) {
  drops[i].addEventListener("click", function () {
    let firstChild = drops[i].children[0];
    firstChild.style.display = "block";
  });
}

document.addEventListener("click", function (event) {
  //console.log(drops.length);
  for (let i = 0; i < drops.length; i++) {
    // console.log(i);
    if (!drops[i].contains(event.target)) {
      let firstChild = drops[i].children[0];

      firstChild.style.display = "none";
      //  drops[0].firstChild.style.display = "none";
    }
  }
});

function resetFilter() {
  localStorage.setItem("znamka", "");
  localStorage.setItem("model", "");
  localStorage.setItem("gorivo", "");
  localStorage.setItem("prevozenih", "");
  localStorage.setItem("cena-od", "");
  localStorage.setItem("cena-do", "");
  localStorage.setItem("letnik-od", "");
  localStorage.setItem("letnik-do", "");
}

function showLocals() {}

function fillDrops() {
  console.log("1: " + drops[0].querySelectorAll("p")[0].innerHTML);
  console.log("2: " + drops[1].querySelectorAll("p")[0].innerHTML);
  console.log("3: " + drops[2].querySelectorAll("p")[0].innerHTML);
  console.log("4: " + drops[3].querySelectorAll("p")[0].innerHTML);
  console.log("5: " + drops[4].querySelectorAll("p")[0].innerHTML);

  drops[0].querySelectorAll("p")[0].innerHTML = localStorage.getItem("znamka");

  drops[1].querySelectorAll("p")[0].innerHTML = localStorage.getItem("cena-od");

  drops[2].querySelectorAll("p")[0].innerHTML = localStorage.getItem("cena-do");

  drops[3].querySelectorAll("p")[0].innerHTML =
    localStorage.getItem("prevozenih");

  drops[4].querySelectorAll("p")[0].innerHTML = localStorage.getItem("model");
  drops[5].querySelectorAll("p")[0].innerHTML =
    localStorage.getItem("letnik-od");
  drops[6].querySelectorAll("p")[0].innerHTML =
    localStorage.getItem("letnik-do");
  drops[7].querySelectorAll("p")[0].innerHTML = localStorage.getItem("gorivo");
}

window.onload = function () {
  showLocals();
  start();
  //resetFilter();
  /*if (firstTime) {
    alert("RESET");
    resetFilter();
    firstTime = false;
  }*/
  fillDrops();
  filterModel();
};

function error() {
  //alert(h3[0].innerHTML);
  h3[0].style.color = "red";
  h3[0].innerHTML = "Pozabili ste izbrati iskalne kriterije:";
}

let search = document.getElementById("search-index");
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
