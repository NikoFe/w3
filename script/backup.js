//let carDatabase = document.getElementById("car-database");

let row3 = document.getElementById("search-right-row-3");
let emptySearch = document.getElementById("empty-search");
let brandSearch = document.getElementById("brand-search");
let rightRow1 = document.getElementById("search-right-row-1");
let rightRow2 = document.getElementById("search-right-row-2");
let rightRow3 = document.getElementById("search-right-row-3");
let fillableList = document.getElementById("fillable-list");
let models = document.getElementById("models");
let pageMid = document.getElementById("pageMid");
let mainTitle = document.getElementById("rubrika-title");

let shown = 0;

let test = document.getElementById("search-right-row-2");
let modelPass;

let examples = document.getElementsByClassName("example");
let nextBlocks = document.getElementsByClassName("nextBlock");
let modelList = document.querySelectorAll("#models li");

console.log("EXAMPLES-LENGTH: " + examples.length);

let examplesArray = Array.from(examples);

let customLis;
let currPage = 1;
let pageSize = 3;
let prevDisplay;
let firstLoad;
let displayStart;
let displayEnd;

let currentBrand;
let currentModel;

let pageNumbers;
let pageCount;

function brandOption() {
  currentBrand = localStorage.getItem("znamka");
  currentModel = localStorage.getItem("model");

  brandSearch.innerHTML = localStorage.getItem("znamka");
}

function prevPage() {
  if (currPage > 1) {
    currPage--;
  }
  examplesShow(currPage);
}

function nextPage() {
  if (currPage < examples.length / pageSize) {
    currPage++;
  }
  examplesShow(currPage);
}

test.addEventListener("click", function () {
  examplesShow(2);
});

function displayPageNumbers(num) {
  let counted = 0;
  let required = 0;
  if (pageCount < 5) {
    required = pageCount;
  } else {
    if (num > 3 && num < pageCount - 3) {
      required = 6;
    } else required = 5;
  }
  let current = 0;

  console.log("---------------------NUM: " + num);
  pageNumbers[num].style.display = "flex";

  for (let i = 1; i < Infinity; i++) {
    current = Number(num - i);
    if (current >= 0) {
      if (counted < required) {
        console.log("DOWN " + current);

        pageNumbers[current].style.display = "flex";
        counted++;
      } else {
        pageNumbers[current].style.display = "none";
      }
    }
    current = Number(num + i);
    if (current < pageCount) {
      if (counted < required) {
        console.log("UP " + current);

        pageNumbers[current].style.display = "flex";
        counted++;
      } else {
        pageNumbers[current].style.display = "none";
      }
    }

    if (i == 50) {
      break;
    }
  }
}

function examplesShow(num) {
  // alert("A");
  pageNumbers = pageMid.querySelectorAll("div");
  prevDisplay = currPage;
  currPage = num;

  console.log("PAGE NUMBERS: " + pageNumbers);
  console.log("PAGE NUMBERS LENGTH: " + pageNumbers.length);
  displayPageNumbers(num - 1);

  displayStart = (currPage - 1) * pageSize;
  displayEnd = displayStart + pageSize - 1;

  console.log("DISPLAY START: " + displayStart);
  console.log("DISPLAY END: " + displayEnd);

  for (let k = 0; k < examples.length; k++) {
    // examples[i].style.backgroundColor = "white";
    examples[k].style.display = "none";
  }

  let passed = 0;
  for (let i = 0; i < examples.length; i++) {
    // alert(examples[i].style.backgroundColor);

    if (examples[i].style.backgroundColor == "rgba(1, 1, 1, 0)") {
      console.log("TRUE");
      passed++;
      if (passed > currPage * pageSize - pageSize) {
        examples[i].style.display = "flex";
        console.log("TRUE2");
      }
    }

    if (passed > currPage * pageSize - 1) {
      break;
    }
  }

  for (let i = 0; i < nextBlocks.length; i++) {
    nextBlocks[i].style.backgroundColor = "white";
  }

  nextBlocks[currPage].style.backgroundColor = "lightGray";
}

//fillableList.style.backgroundColor = "brown";

let znamka = "";
let letnik = "";
let model = "";
let gorivo = "";
let price = "";
let prices;
let menjalnik = "";

function searchFor(lis) {
  let firstStr = lis.substring(0, lis.indexOf(" "));
  let reversed = "";
  let temp = "";
  let temp2 = "";
  //console.log("/////////////////// " + firstStr);
  switch (firstStr) {
    case "1.":
      reversed = lis.split("").reverse().join("");
      temp = reversed.substring(0, reversed.indexOf(" "));
      return temp.split("").reverse().join("");

      break;
    case "Prevoženih":
      return lis.substring(lis.indexOf(" ")).trim();
      break;
    case "Gorivo":
      temp = lis.substring(lis.indexOf(" ")).trim();
      temp2 = temp.substring(0, temp.indexOf(" ")).trim();

      if (temp2 == "") {
        return temp;
      }
      return temp2;

      break;
    case "Menjalnik":
      temp = lis.substring(lis.indexOf(" ")).trim();
      temp2 = temp.substring(0, temp.indexOf(" ")).trim();
      return temp2;
      break;
    case "Motor":
      return lis.substring(lis.indexOf(" "));
      break;
  }
}

function pass() {
  if (
    localStorage.getItem("znamka") != "" &&
    localStorage.getItem("znamka") != "Vse znamke" &&
    localStorage.getItem("znamka") != znamka
  ) {
    console.log(znamka + " | " + localStorage.getItem("znamka"));
    console.log("-------------A znamka---------------");
    return false;
  }

  if (
    localStorage.getItem("model") != "" &&
    localStorage.getItem("model") != "Vsi modeli" &&
    localStorage.getItem("model") != model
  ) {
    console.log("-------------B model---------------");
    return false;
  }

  if (
    localStorage.getItem("gorivo") == "Dizel" &&
    gorivo != "diesel" &&
    gorivo != "dizel" &&
    gorivo != "Dizel" &&
    gorivo != "Diesel" &&
    gorivo != "dizelski" &&
    gorivo != "Dizelski" &&
    gorivo != "dieselski" &&
    gorivo != "Dieselski"
  ) {
    console.log("-------------C gorivo---------------");

    return false;
  }

  if (
    localStorage.getItem("gorivo") == "Bencin" &&
    gorivo != "bencin" &&
    gorivo != "bencinski" &&
    gorivo != "Bencin" &&
    gorivo != "Bencinski"
  ) {
    console.log("-------------D gorivo---------------");
    return false;
  }

  if (
    localStorage.getItem("gorivo") == "e-pogoni" &&
    gorivo != "e-pogon" &&
    gorivo != "električni" &&
    gorivo != "elektricni"
  ) {
    console.log("-------------gorivo " + gorivo + "---------------");
    console.log("-------------D1 e-pogon---------------");
    return false;
  }
  if (localStorage.getItem("gorivo") == "plin" && gorivo != "plin") {
    console.log("-------------D2 plin---------------");
    return false;
  }

  if (
    Number(localStorage.getItem("letnik-od")) > Number(letnik) ||
    Number(localStorage.getItem("letnik-do")) < Number(letnik)
  ) {
    console.log(
      "1a: " +
        Number(localStorage.getItem("letnik-od")) +
        " 1b: " +
        Number(letnik)
    );
    console.log(
      "2a: " +
        Number(localStorage.getItem("letnik-do")) +
        " 2b: " +
        Number(letnik)
    );
    console.log("------------------E letnik-----------------------");
    return false;
  }

  //console.log(Number(localStorage.getItem("cena-od")));
  //console.log(Number(localStorage.getItem("cena-do")));
  //console.log(Number(price));
  if (
    Number(localStorage.getItem("cena-od")) > Number(price) ||
    Number(localStorage.getItem("cena-do")) < Number(price)
  ) {
    console.log("------------------F cena-----------------------" + price);
    return false;
  }

  return true;
}

function checkIfExists(model) {
  customLis = fillableList.querySelectorAll(".custom-li");

  for (let i = 0; i < customLis.length; i++) {
    let text = customLis[i].querySelectorAll(".left p")[0].innerHTML;

    console.log(model + " - " + text);
    if (text == model) {
      console.log("M");
      customLis[i].querySelectorAll("p")[1].innerHTML =
        Number(customLis[0].querySelectorAll("p")[1].innerHTML) + 1;
      return true;
    }
    console.log("MM");
  }
  return false;
}

function createCustomLi(model) {
  //console.log("MODEL: " + model);

  console.log("IIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII");

  if (!checkIfExists(model) && pass()) {
    console.log("CREATE " + model);
    let customLi = document.createElement("div");
    let left = document.createElement("div");
    let i1 = document.createElement("i");
    let p1 = document.createElement("p");
    let p2 = document.createElement("p");

    p2.innerHTML = "1";
    p1.innerHTML = model;
    //console.log("MODEL: " + model);
    i1.className = "fa-solid fa-caret-right";

    left.appendChild(i1);
    left.appendChild(p1);
    left.className = "left";

    left.style.display = "flex";

    customLi.appendChild(left);
    customLi.appendChild(p2);

    customLi.className = "custom-li";

    fillableList.appendChild(customLi);
  }
}

function leftAdd(examples) {
  if (localStorage.getItem("znamka") != "Vse znamke") {
    console.log(examples);
    //logVariables();

    let top = examples.querySelectorAll("h4");

    let trimmed = top[0].innerHTML.trim();
    let secondHalf = trimmed.substring(trimmed.indexOf(" ") + 1);

    znamka = trimmed.substring(0, trimmed.indexOf(" "));

    if (znamka == localStorage.getItem("znamka")) {
      // !!!!!!!!!!!!!!! TILL YOU REACH : read the model!""
      model = trimmed.substring(
        trimmed.indexOf(" ") + 1,
        trimmed.indexOf(" ") + secondHalf.indexOf(" ") + 1
      );

      createCustomLi(model);
    }
  }
}

function singleFilter() {
  let lis = examples[i].querySelectorAll("li");

  let top = examples[i].querySelectorAll("h4");

  let trimmed = top[0].innerHTML.trim();
  let secondHalf = trimmed.substring(trimmed.indexOf(" ") + 1);

  znamka = trimmed.substring(0, trimmed.indexOf(" "));
  model = trimmed.substring(
    trimmed.indexOf(" ") + 1,
    trimmed.indexOf(" ") + secondHalf.indexOf(" ") + 1
  );
  if (model == "" || model == " ") {
    model = trimmed.substring(trimmed.indexOf(" "));
  }

  letnik = searchFor(lis[0].innerHTML);
  prevozenih = searchFor(lis[1].innerHTML);
  gorivo = searchFor(lis[2].innerHTML);
  menjalnik = searchFor(lis[3].innerHTML);
  motor = searchFor(lis[4].innerHTML);
  prices = examples[i].querySelectorAll(".price-div p");
  price = prices[0].innerHTML;

  price = price.replace(".", "");
  price = price.replace(" ", "");
  price = price.replace("$", "");
}

function filter() {
  fillableList.innerHTML = "";
  shown = 0;
  //alert("B");
  let singlePass = false;

  for (let i = 0; i < examples.length; i++) {
    console.log("I: " + i);
    //console.log(examples[i]);
    let lis = examples[i].querySelectorAll("li");

    let top = examples[i].querySelectorAll("h4");

    let trimmed = top[0].innerHTML.trim();
    let secondHalf = trimmed.substring(trimmed.indexOf(" ") + 1);

    znamka = trimmed.substring(0, trimmed.indexOf(" "));
    model = trimmed.substring(
      trimmed.indexOf(" ") + 1,
      trimmed.indexOf(" ") + secondHalf.indexOf(" ") + 1
    );
    if (model == "" || model == " ") {
      model = trimmed.substring(trimmed.indexOf(" "));
    }

    letnik = searchFor(lis[0].innerHTML);
    prevozenih = searchFor(lis[1].innerHTML);
    gorivo = searchFor(lis[2].innerHTML);
    menjalnik = searchFor(lis[3].innerHTML);
    motor = searchFor(lis[4].innerHTML);
    prices = examples[i].querySelectorAll(".price-div p");
    price = prices[0].innerHTML;

    price = price.replace(".", "");
    price = price.replace(" ", "");
    price = price.replace("$", "");

    if (!pass()) {
      examples[i].style.display = "none";
      examples[i].style.border = "rgba(0,0,0,0)";

      //examples[i].style.backgroundColor = "red";
    } else {
      if (typeof examples[i] !== "undefined") {
        console.log(typeof examples[i]);
        leftAdd(examples[i]);
      }
      shown++;
      examples[i].style.backgroundColor = "rgba(1,1,1,0)";
      singlePass = true;
    }
  }

  if (singlePass == false) {
    emptySearch.style.display = "flex";
    rightRow1.style.display = "none";
    rightRow2.style.display = "none";
    rightRow3.style.display = "none";
  } else {
    emptySearch.style.display = "none";
    rightRow1.style.display = "flex";
  }

  //leftAdd();
}

function showLocals() {
  console.log("ZNAMKA: " + localStorage.getItem("znamka"));
  console.log("CENA OD: " + localStorage.getItem("cena-od"));
  console.log("CENA DO: " + localStorage.getItem("cena-do"));
  console.log("PREVOŽENIH: " + localStorage.getItem("prevozenih"));

  console.log("GORIVO: " + localStorage.getItem("gorivo"));
  console.log("PREVOZENIH: " + localStorage.getItem("prevozenih"));

  console.log("letnik-od: " + localStorage.getItem("letnik-od"));
  console.log("letnik-do: " + localStorage.getItem("letnik-do"));
}

function generatePagination() {
  pageCount = Math.ceil(shown / pageSize);
  console.log("Examples.length: " + shown);
  console.log("pageSitze: " + pageSize);

  console.log("PAGECOUNT: " + pageCount);

  for (let i = 0; i < pageCount; i++) {
    newPage = document.createElement("div");
    newP = document.createElement("p");
    newP.innerHTML = i.toString();
    newPage.className = "nextBlock";
    newPage.appendChild(newP);
    newPage.style.height = "80px";
    newPage.addEventListener("click", function () {
      examplesShow(i + 1);
      filter();
      // alert(data + " +++ " + options[i].innerHTML);
    });
    pageMid.appendChild(newPage);

    console.log("PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP");
  }
}

function searchTitle() {
  let concatenated = (mainTitle.innerText =
    mainTitle.innerText +
    " " +
    localStorage.getItem("znamka") +
    " " +
    localStorage.getItem("model"));
}

function logVariables() {
  console.log(
    "letnik_:" +
      letnik +
      "| prevozenih_:" +
      prevozenih +
      "| gorivo_:" +
      gorivo +
      "| znamka_:" +
      znamka +
      "| model_:" +
      model +
      "| menjalnik:" +
      menjalnik +
      "| price:" +
      price
  );
}

window.onload = function () {
  //let first = 2;
  //let second = 5;

  showLocals();
  filter();
  generatePagination();
  examplesShow(1);
  brandOption();
  searchTitle();
};
