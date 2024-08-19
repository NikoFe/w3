//let carDatabase = document.getElementById("car-database");
let row3 = document.getElementById("search-right-row-3");
let emptySearch = document.getElementById("empty-search");
let brandSearch = document.getElementById("brand-search");
let rightRow1 = document.getElementById("search-right-row-1");
let fillableList = document.getElementById("fillable-list");
let models = document.getElementById("models");
let pageMid = document.getElementById("pageMid");

let test = document.getElementById("search-right-row-2");
let modelPass;

let examples = document.getElementsByClassName("example");
let nextBlocks = document.getElementsByClassName("nextBlock");
let modelList = document.querySelectorAll("#models li");
let copiedArray = [...examplesArray];

let examplesArray = Array.from(examples);

let filteredExamples = examples;

let customLis;
let listDisplay = 1;
let displaySize = 3;
let prevDisplay;
let firstLoad;
let displaStart;
let displayEnd;

let currentBrand;
let currentModel;

function brandOption() {
  currentBrand = localStorage.getItem("znamka");
  currentModel = localStorage.getItem("model");

  brandSearch.innerHTML = localStorage.getItem("znamka");
}

function prevPage() {
  if (listDisplay > 1) {
    listDisplay--;
  }
  examplesShow(listDisplay);
}

function nextPage() {
  if (listDisplay < examples.length / displaySize) {
    listDisplay++;
  }
  examplesShow(listDisplay);
}

test.addEventListener("click", function () {
  examplesShow(2);
});

function examplesShow(num) {
  // alert("A");
  prevDisplay = listDisplay;
  listDisplay = num;

  let pageNumbers = pageMid.querySelectorAll("div");
  console.log("PAGE NUMBERS: " + pageNumbers);
  console.log("PAGE NUMBERS LENGTH: " + pageNumbers.length);
  for (let j = 0; j < pageNumbers.length; j++) {
    if (j < num - 4 || j > num + 4) {
      console.log("BLANK");
      pageNumbers[j].style.display = "none";
    } else {
      pageNumbers[j].style.display = "flex";
    }
  }

  displayStart = (listDisplay - 1) * displaySize;
  displayEnd = displayStart + displaySize - 1;

  console.log("DISPLAY START: " + displayStart);
  console.log("DISPLAY END: " + displayEnd);

  for (let k = 0; k < examples.length; k++) {
    // examples[i].style.backgroundColor = "white";
    examples[k].style.display = "none";
  }

  for (let k = displayStart; k <= displayEnd; k++) {
    //examples[i].style.backgroundColor = "purple";
    if (k < examples.length) {
      examples[k].style.display = "flex";
    }
    // console.log("- " + i);
  }
  // alert("A");

  //examples[displayStart].style.backgroundColor = "yellow";
  //examples[displayEnd].style.backgroundColor = "blue";

  //---------------------------------------------------

  //---------------------------------------------------
  //---------------------------------------------------
  //---------------------------------------------------

  for (let i = 0; i < nextBlocks.length; i++) {
    nextBlocks[i].style.backgroundColor = "white";
  }
  if (listDisplay < 7) {
    nextBlocks[listDisplay].style.backgroundColor = "lightGray";
  }
}

//fillableList.style.backgroundColor = "brown";

let znamka = "";
let letnik = "";
let model = "";
let gorivo = "";
let price = "";
let prices;
let menjalnik = "";

function searchAfterSpace(lis) {
  return lis.substring(lis.indexOf(" ") + 1);
}

function searchBetweenSpace(lis) {
  let firstHalf = searchAfterSpace(lis);
  return firstHalf.substring(0, firstHalf.indexOf(" "));
}
function lastString(lis) {
  let temp = lis.split("").reverse().join("");
  let temp2 = temp.substring(0, temp.indexOf(" "));
  console.log("REVERSED: " + temp2.split("").reverse().join(""));
  return temp2.split("").reverse().join("");
}

function pass() {
  if (
    localStorage.getItem("znamka") != "" &&
    localStorage.getItem("znamka") != "Vse znamke" &&
    localStorage.getItem("znamka") != znamka
  ) {
    console.log("An invalid znamka");
    return false;
  }

  if (
    localStorage.getItem("model") != "" &&
    localStorage.getItem("model") != "Vsi modeli" &&
    localStorage.getItem("model") != model
  ) {
    console.log("B invalid model");
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
    console.log("C invalid gorivo dizel");

    return false;
  }

  if (
    localStorage.getItem("gorivo") == "Bencin" &&
    gorivo != "bencin" &&
    gorivo != "bencinski" &&
    gorivo != "Bencin" &&
    gorivo != "Bencinski"
  ) {
    return false;
  }

  /* if (
    localStorage.getItem("gorivo") == "e-pogon" &&
    lis[2].innerHTML != "e-pogon" &&
    lis[2].innerHTML != "električni" &&
    lis[2].innerHTML != "elektricni"
  ) {
    return false;
  */

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
    console.log("E");
    return false;
  }

  console.log(Number(localStorage.getItem("cena-od")));
  console.log(Number(localStorage.getItem("cena-do")));
  console.log(Number(price));
  if (
    Number(localStorage.getItem("cena-od")) > Number(price) ||
    Number(localStorage.getItem("cena-do")) < Number(price)
  ) {
    console.log("F");
    return false;
  }

  return true;
}

function checkIfExists(model) {
  customLis = fillableList.querySelectorAll(".custom-li");

  for (let i = 0; i < customLis.length; i++) {
    let text = customLis[0].querySelectorAll(".left p")[0].innerHTML;

    if (text == model) {
      customLis[0].querySelectorAll("p")[1].innerHTML =
        Number(customLis[0].querySelectorAll("p")[1].innerHTML) + 1;
      return true;
    }

    console.log("MODEL" + model + " TEXT: " + text);
  }
  return false;
}

function createCustomLi(model) {
  if (!checkIfExists(model)) {
    let customLi = document.createElement("div");
    let left = document.createElement("div");
    let i1 = document.createElement("i");
    let p1 = document.createElement("p");
    let p2 = document.createElement("p");

    p2.innerHTML = "1";
    p1.innerHTML = model;
    i1.className = "fa-solid fa-caret-right";

    left.appendChild(i1);
    left.appendChild(p1);
    left.className = "left";

    left.style.display = "flex";

    customLi.appendChild(left);
    customLi.appendChild(p2);

    customLi.className = "custom-li";

    fillableList.appendChild(customLi);

    /*
  <div class="custom-li">
  <div class="left">
    <i class="fa-solid fa-caret-right"></i>
    <p>Video Klic</p>
  </div>

  <p>1866</p>
</div>*/
  }
}

function leftAdd() {
  if (localStorage.getItem("znamka") != "Vse znamke") {
    for (let i = 0; i < examples.length; i++) {
      let top = examples[i].querySelectorAll("h4");

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
}

function filter() {
  //alert("B");
  let singlePass = false;
  for (let i = 0; i < examples.length; i++) {
    let lis = examples[i].querySelectorAll("li");

    let top = examples[i].querySelectorAll("h4");

    let trimmed = top[0].innerHTML.trim();
    let secondHalf = trimmed.substring(trimmed.indexOf(" ") + 1);

    znamka = trimmed.substring(0, trimmed.indexOf(" "));
    model = trimmed.substring(
      trimmed.indexOf(" ") + 1,
      trimmed.indexOf(" ") + secondHalf.indexOf(" ") + 1
    );

    letnik = lastString(lis[0].innerHTML);
    prevozenih = searchBetweenSpace(lis[1].innerHTML);
    gorivo = searchBetweenSpace(lis[2].innerHTML);
    menjalnik = searchBetweenSpace(lis[3].innerHTML);
    motor = searchAfterSpace(lis[4].innerHTML);
    prices = examples[i].querySelectorAll(".price-div p");
    price = prices[0].innerHTML;

    price = price.replace(".", "");
    price = price.replace(" ", "");
    price = price.replace("$", "");

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

    if (!pass()) {
      examples[i].style.display = "none";
      console.log("I: " + i);

      //examples[i].style.backgroundColor = "red";
    } else {
      singlePass = true;
    }
  }

  if (singlePass == false) {
    emptySearch.style.display = "flex";
    rightRow1.style.display = "none";
  } else {
    emptySearch.style.display = "none";
    rightRow1.style.display = "flex";
  }

  leftAdd();
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
  let pageCount = Math.ceil(examples.length / displaySize);

  console.log("Examples.length: " + examples.length);
  console.log("PAGECOUNT: " + pageCount);

  for (let i = 0; i < pageCount; i++) {
    newPage = document.createElement("div");
    newP = document.createElement("p");
    newP.innerHTML = (i + 1).toString();
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

window.onload = function () {
  generatePagination();
  showLocals();
  examplesShow(1);
  brandOption();
  filter();
};
