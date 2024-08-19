let drops = document.getElementsByClassName("drop");
let downs = document.getElementsByClassName("down");
let h3 = document.querySelectorAll("#row-3 h3");

const dropdownsP = document.querySelectorAll(".dropdowns p");

console.log("AS LENGTH: " + dropdownsP.length);
for (let i = 0; i < dropdownsP.length; i++) {
  // console.log("as: " + dropdownsP[i].innerHTML);
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
  let znamkaOptions = createLiList("znamka-dropdown");
  let cenaOdOptions = createLiList("cena-od-dropdown");
  let cenaDoOptions = createLiList("cena-do-dropdown");
  let prevozenihOptions = createLiList("prevozenih-dropdown");
  let modelOptions = createLiList("model-dropdown");
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

function showLocals() {
  console.log("ZNAMKA: " + localStorage.getItem("znamka"));
  console.log("CENA OD: " + localStorage.getItem("cena-od"));
  console.log("CENA DO: " + localStorage.getItem("cena-do"));
  console.log("PREVOŽENIH: " + localStorage.getItem("prevozenih"));

  console.log("GORIVO: " + localStorage.getItem("gorivo"));
  console.log("PREVOZENIH: " + localStorage.getItem("prevozenih"));

  console.log("LETNIK OD: " + localStorage.getItem("letnik-od"));
  console.log("LETNIK DO: " + localStorage.getItem("letnik-do"));
}

window.onload = function () {
  showLocals();
  start();
};

function error() {
  alert(h3[0].innerHTML);
  h3[0].style.color = "red";
  h3[0].innerHTML = "Pozabili ste izbrati iskalne kriterije:";
}

let search = document.getElementById("search-button");
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
