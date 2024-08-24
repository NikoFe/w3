function generateMoto(v1, v2, v3, v4, v5, v6, v7) {
  let carDatabase = document.getElementById("car-database");
  // let examples = document.getElementsByClassName("example");

  //lert(examples.length);

  //let carDatabase = document.createElement("div");

  //carDatabase.id = "car-database";
  // carDatabase.class = "database";

  let example = document.createElement("div");
  example.className = "example";

  let exampleRow1 = document.createElement("div");
  exampleRow1.className = "example-row-1";

  let h4 = document.createElement("h4");
  h4.innerHTML = v1;
  let i1 = document.createElement("i");
  i1.className = "fa-regular fa-star";

  let exampleRow2 = document.createElement("div");
  exampleRow2.className = "example-row-2";

  let topPonudba = document.createElement("div");
  topPonudba.className = "top-ponudba";

  let topPonudbap = document.createElement("p");
  topPonudbap.innerHTML = "TOP-PONUDBA";

  let exampleLeft = document.createElement("div");
  exampleLeft.className = "example-left";

  let exampleLeftImg = document.createElement("img");
  exampleLeftImg.src = v2;
  exampleLeftImg.alt = v2;

  let verticaLine = document.createElement("div");
  verticaLine.className = "full-vertical-line";

  let exampleRight = document.createElement("div");
  exampleRight.className = "example-right";

  let ul = document.createElement("ul");
  let liLetnik = document.createElement("li");
  liLetnik.innerHTML = v3;
  let liPrevozenih = document.createElement("li");
  liPrevozenih.innerHTML = v4;
  let liMotor = document.createElement("li");
  liMotor.innerHTML = v5;

  let exampleRightBottom = document.createElement("div");
  exampleRightBottom.className = "example-right-bottom";

  let priceDiv = document.createElement("div");
  priceDiv.className = "price-div";
  let priceImg = document.createElement("img");
  priceImg.src = v6;
  priceImg.alt = v6;

  let priceP = document.createElement("p");
  priceP.innerHTML = v7;

  priceDiv.appendChild(priceP);

  exampleRightBottom.appendChild(priceImg);
  exampleRightBottom.appendChild(priceDiv);

  ul.appendChild(liLetnik);
  ul.appendChild(liPrevozenih);

  ul.appendChild(liMotor);

  exampleRight.appendChild(ul);
  exampleRight.appendChild(exampleRightBottom);

  exampleLeft.appendChild(exampleLeftImg);

  topPonudba.appendChild(topPonudbap);

  exampleRow2.appendChild(topPonudba);
  exampleRow2.appendChild(exampleLeft);
  exampleRow2.appendChild(verticaLine);
  exampleRow2.appendChild(exampleRight);

  exampleRow1.appendChild(h4);
  exampleRow1.appendChild(i1);

  example.appendChild(exampleRow1);
  example.appendChild(exampleRow2);
  carDatabase.appendChild(example);

  let test123 = document.createElement("p");
  test123.innerHTML = "test123";

  carDatabase.appendChild(example);
}

function generateMotos() {
  carDatabase.innerHTML = "";
  generateMoto(
    "Honda Crosstourer 12000",
    "../images/m1.jpg",
    "1. registracija 2019",
    "Prevozenih 50000 km",
    "Motor 99kW",
    "../images/example-add-1.png",
    "1.000 $"
  );
  generateMoto(
    "Harley-Davidson Sportster 48",
    "../images/m2.jpg",
    "1. registracija 2021",
    "Prevozenih 3000 km",
    "Motor 49kW",
    "../images/example-add-1.png",
    "2.500 $"
  );
  generateMoto(
    "Honda CBF 500+A2 25KW+GIVI KOVČKI+SERVISIRAN+BREZ POLOGA",
    "../images/m3.jpg",
    "1. registracija 2005",
    "Prevozenih 3000 km",
    "Motor 49kW",
    "../images/example-add-1.png",
    "3.000 $"
  );
  generateMoto(
    "BMW S 1000R-TOV.GARANCIJA-KREDIT-LEASING BREZ POLOGA",
    "../images/m4.jpg",
    "1. registracija 2022",
    "Prevozenih 7000 km",
    "Motor 121kW",
    "../images/example-add-1.png",
    "4.000 $"
  );
  generateMoto(
    "Honda CBF 1000 A",
    "../images/m4.jpg",
    "1. registracija 2009",
    "Prevozenih 107758 km",
    "Motor 75kW",
    "../images/example-add-1.png",
    "5.000 $"
  );
  generateMoto(
    "Honda Crosstourer VFR1200XD",
    "../images/m5.jpg",
    "1. registracija 2016",
    "Prevozenih 23000 km",
    "Motor 95kW",
    "../images/example-add-1.png",
    "6.000 $"
  );
  generateMoto(
    "Honda CBF 500",
    "../images/m6.jpg",
    "1. registracija 2016",
    "Prevozenih 61000 km",
    "Motor 31kW",
    "../images/example-add-1.png",
    "7.000 $"
  );
  generateMoto(
    "Honda CBF 1000 A",
    "../images/m7.jpg",
    "1. registracija 2005",
    "Prevozenih 63500 km",
    "Motor 72kW",
    "../images/example-add-1.png",
    "8.000 $"
  );
  generateMoto(
    "BMW S 1000 XR M PAKET+165HP+TOV GARANCIJA+MAX OPREMA",
    "../images/m8.jpg",
    "1. registracija 2022",
    "Prevozenih 12957 km",
    "Motor 121kW",
    "../images/example-add-1.png",
    "9.000 $"
  );
  generateMoto(
    "Harley-Davidson Sportster Iron XL883N",
    "../images/m9.jpg",
    "1. registracija 2022",
    "Prevozenih 45000 km",
    "Motor 49kW",
    "../images/example-add-1.png",
    "10.000 $"
  );
  generateMoto(
    "Harley-Davidson ROAD KING CLASSIC M8B107 1750",
    "../images/m10.jpg",
    "1. registracija 2003",
    "Prevozenih 39000 km",
    "Motor 64kW",
    "../images/example-add-1.png",
    "11.000 $"
  );
}
