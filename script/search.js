let carDatabase = document.getElementById("car-database");

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
let resultCount = document.querySelectorAll("#result-count p")[0];

let test = document.getElementById("search-right-row-2");
let modelPass;

let examples, filtered, examplesArray;
let nextBlocks = document.getElementsByClassName("nextBlock");
let modelList = document.querySelectorAll("#models li");

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

let start = 0;
let end = pageSize;

function logVariables() {
  console.log(
    "letnik_:" +
      letnik +
      "| prevozenih_:" +
      prevozenih +
      // "| gorivo_:" +
      //   gorivo +
      "| znamka_:" +
      znamka +
      "| model_:" +
      model +
      // "| menjalnik:" +
      //  menjalnik +
      "| price:" +
      price +
      "| motor:" +
      motor
  );
}
function logLocals() {
  console.log("////////////////////////////");
  console.log("ZNAMKA: " + localStorage.getItem("znamka"));
  console.log("CENA OD: " + localStorage.getItem("cena-od"));
  console.log("CENA DO: " + localStorage.getItem("cena-do"));
  console.log("PREVOŽENIH: " + localStorage.getItem("prevozenih"));

  console.log("GORIVO: " + localStorage.getItem("gorivo"));
  console.log("PREVOZENIH: " + localStorage.getItem("prevozenih"));

  console.log("letnik-od: " + localStorage.getItem("letnik-od"));
  console.log("letnik-do: " + localStorage.getItem("letnik-do"));
  console.log("/////////////////////////////");
}

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

function createFilteredVariables(examples) {
  let lis = examples.querySelectorAll("li");

  let top = examples.querySelectorAll("h4");

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

  if (localStorage.getItem("vehicle") == "car") {
    gorivo = searchFor(lis[2].innerHTML);
    menjalnik = searchFor(lis[3].innerHTML);
  }

  motor = searchFor(lis[lis.length - 1].innerHTML);

  prices = examples.querySelectorAll(".price-div p");
  price = prices[0].innerHTML;

  price = price.replace(".", "");
  price = price.replace(" ", "");
  price = price.replace("$", "");
}

function pass(examples) {
  if (
    localStorage.getItem("znamka") != "" &&
    localStorage.getItem("znamka") != "Vse znamke" &&
    localStorage.getItem("znamka") != znamka
  ) {
    console.log("-------------A znamka---------------");
    console.log("curr znamka: " + znamka);
    console.log("expected znamka: " + localStorage.getItem("znamka"));
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
  //////////////////////////////////////////////////////////////////////////////
  if (localStorage.getItem("vehicle") == "car") {
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
  } //////////////////////////////////////////////////////////////////////////////

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
  if (
    Number(localStorage.getItem("cena-od")) > Number(price) ||
    Number(localStorage.getItem("cena-do")) < Number(price)
  ) {
    console.log("------------------F cena-----------------------" + price);
    return false;
  }
  return true;
}

function generatePagination() {
  pageCount = Math.ceil(filtered.length / pageSize);

  console.log("pageSitze: " + pageSize);

  console.log("PAGECOUNT: " + pageCount);

  for (let i = 0; i < pageCount; i++) {
    newPage = document.createElement("div");
    newP = document.createElement("p");
    newP.innerHTML = (i + 1).toString();
    newPage.className = "nextBlock";
    newPage.appendChild(newP);
    newPage.style.height = "80px";
    newPage.addEventListener("click", function () {
      // alert(i);
      showPage(i + 1);

      // alert(data + " +++ " + options[i].innerHTML);
    });
    pageMid.appendChild(newPage);

    console.log("PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP");
  }
}

function createFiltered() {
  console.log("FILTERED START LENGTH: " + filtered.length);
  let backup = filtered.length;

  for (let i = 0; i < filtered.length; i++) {
    createFilteredVariables(filtered[i]);
    console.log("I: " + i);
    // console.log("FILTERED: " + filtered.length);
    logVariables();
    if (!pass()) {
      console.log("NOT PASSED!");
      filtered.splice(i, 1);
      // console.log("filtered length: " + filtered.length);
      i--;
      console.log("I2: " + i);
    }
  }
  console.log("FILTERED LENGRH: " + filtered.length);
  //carDatabase.innerHTML = "";
}

function nextPage() {
  if (currPage + 1 <= pageCount) {
    currPage++;
    showPage(currPage);
  }
}
function prevPage() {
  if (currPage - 1 > 0) {
    currPage--;
    showPage(currPage);
  }
}

function showPage(num) {
  currPage = num;

  console.log(
    "NUM: " +
      num +
      " PAGECOUNT: " +
      pageCount +
      " filteredLength " +
      filtered.length
  );

  for (let i = 0; i < nextBlocks.length; i++) {
    nextBlocks[i].style.backgroundColor = "white";
  }

  console.log("NUM: " + Number(num - 1));
  nextBlocks[Number(num)].style.backgroundColor = "lightGray";

  console.log("FILTERED LENGTH DISPLAY: " + filtered.length);

  if (num < pageCount + 1) {
    for (let i = 0; i < filtered.length; i++) {
      filtered[i].style.diplay = "none";
    }

    start = (num - 1) * pageSize;
    end = start + pageSize;
    console.log("START: " + start);
    console.log("END: " + end);
    if (end >= filtered.length) {
      end = filtered.length;
    }

    carDatabase.innerHTML = "";
    for (let i = start; i < end; i++) {
      filtered[i].style.diplay = "flex";
      carDatabase.appendChild(filtered[i]);
    }
  }

  if (filtered.length == false) {
    emptySearch.style.display = "flex";
    rightRow1.style.display = "none";
    rightRow2.style.display = "none";
    rightRow3.style.display = "none";
  } else {
    emptySearch.style.display = "none";
    rightRow1.style.display = "flex";
    displayPageNumbers(num - 1);
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

function displayPageNumbers(num) {
  pageNumbers = pageMid.querySelectorAll("div");
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
  //pageNumbers[num].style.display = "flex";

  for (let i = 1; i < Infinity; i++) {
    current = Number(num - i);

    if (current >= 0) {
      if (counted < required) {
        //console.log("DOWN " + current);

        pageNumbers[current].style.display = "flex";
        counted++;
      } else {
        pageNumbers[current].style.display = "none";
      }
    }
    current = Number(num + i);
    if (current < pageCount) {
      if (counted < required) {
        // console.log("UP " + current);

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

function createLi() {
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

function alreadyExists() {
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

function displayModels() {
  for (let i = 0; i < filtered.length; i++) {
    let lis = filtered[i].querySelectorAll("li");

    let top = filtered[i].querySelectorAll("h4");

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

    if (!alreadyExists()) {
      createLi();
    }
  }
}

function fillResultCount() {
  resultCount.innerText = "Preko " + filtered.length + " oglasov:";
}

window.onload = function () {
  //let first = 2;
  //let second = 5;
  singlePass = false;

  if (localStorage.getItem("vehicle") == "car") {
    generateCars();
  } else if (localStorage.getItem("vehicle") == "moto") {
    generateMotos();
  } else {
    generateCars();
  }

  examples = document.getElementsByClassName("example");
  filtered = Array.prototype.slice.call(examples);
  console.log("EXAMPLES-LENGTH: " + examples.length);
  examplesArray = Array.from(examples);
  console.log("EXAMPLES-LENGTH: " + examples.length);

  logLocals();

  createFiltered();

  generatePagination();

  showPage(1);

  searchTitle();

  displayModels();

  fillResultCount();
};
