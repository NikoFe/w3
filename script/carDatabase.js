function generateCar(v1, v2, v3, v4, v5, v6, v7, v8, v9) {
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
  let liGorivo = document.createElement("li");
  liGorivo.innerHTML = v5;
  let liMenjalnik = document.createElement("li");
  liMenjalnik.innerHTML = v6;
  let liMotor = document.createElement("li");
  liMotor.innerHTML = v7;

  let exampleRightBottom = document.createElement("div");
  exampleRightBottom.className = "example-right-bottom";

  let priceDiv = document.createElement("div");
  priceDiv.className = "price-div";
  let priceImg = document.createElement("img");
  priceImg.src = v8;
  priceImg.alt = v8;

  let priceP = document.createElement("p");
  priceP.innerHTML = v9;

  priceDiv.appendChild(priceP);

  exampleRightBottom.appendChild(priceImg);
  exampleRightBottom.appendChild(priceDiv);

  ul.appendChild(liLetnik);
  ul.appendChild(liPrevozenih);
  ul.appendChild(liGorivo);
  ul.appendChild(liMenjalnik);
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

function generateCars() {
  carDatabase.innerHTML = "";
  generateCar(
    "Mazda Mazda3 CD150 AT Attraction",
    "../images/e1.jpg",
    "1. registracija 2016",
    "Prevoženih 10000 km",
    "Gorivo e-pogon",
    "Menjalnik ročni menjalnik",
    "Motor 2191 ccm",
    "../images/example-add-1.png",
    "1.000 $"
  );
  generateCar(
    "Volkswagen Tiguan R-Line Edition 1.5 TSI DS-KOT NOV-MRTVIKOT-NAVI",

    "../images/e2.jpg",
    "1. registracija 2020",
    "Prevoženih 20000 km",
    "Gorivo Bencinski motor",
    "Menjalnik avtomatski menjalnik",
    "Motor 1498 ccm",
    "../images/example-add-1.png",
    "2.000 $"
  );
  generateCar(
    "   Škoda Octavia RS 2.0 TDI DSG KEYLESS KLJUKA OGR VOLAN MEMORY",

    "../images/e3.jpg",
    "1. registracija 2019",
    "Prevoženih 15000 km",
    "Gorivo diesel motor",
    "Menjalnik avtomatski menjalnik",
    "Motor 1984 ccm",
    "../images/example-add-1.png",
    "3.000 $"
  );
  generateCar(
    "     Hyundai i20 1.2 CVVT PREMIUM.1LAST.KOT NOV 33000KM.BREZ  POLOGA",

    "../images/e4.jpg",
    "1. registracija 2017",
    "Prevoženih 10000 km",
    "Gorivo bencinski motor",
    "Menjalnik ročni menjalnik",
    "Motor 1248 ccm",
    "../images/example-add-1.png",
    "4.000 $"
  );
  generateCar(
    "Opel Astra 1.2 TURBO 96KW S S GS ST",

    "../images/e5.jpg",
    "1. registracija 2016",
    "Prevoženih 7000 km",
    "Gorivo plin",
    "Menjalnik ročni menjalnik",
    "Motor 1199 ccm",
    "../images/example-add-1.png",
    "5.000 $"
  );
  generateCar(
    "Citroen C3 1.2 1.lastnik 56.111km HITRI KREDIT LEANPAY",

    "../images/e6.jpg",
    "1. registracija 2019",
    "Prevoženih 56111 km",
    "Gorivo e-pogon",
    "Menjalnik ročni menjalnik",
    "Motor 1199 ccm",
    "../images/example-add-1.png",
    "7.000 $"
  );
  generateCar(
    "Audi A6 Avant 3.0 TDI clean diesel S tronic 160kW",

    "../images/e7.jpg",
    "1. registracija 2015",
    "Prevoženih 15000 km",
    "Gorivo diesel motor",
    "Menjalnik avtomatski menjalnik",
    "Motor 2967 ccm",
    "../images/example-add-1.png",
    "8.000 $"
  );
  ////////////
  generateCar(
    "Opel Astra GTC 1.7 CDTI Enjoy",

    "../images/e8.jpg",
    "1. registracija 2007",
    "Prevoženih 25000 km",
    "Gorivo diesel motor",
    "Menjalnik ročni menjalnik",
    "Motor 1686 ccm",
    "../images/example-add-1.png",
    "9.000 $"
  );
  generateCar(
    "Citroen C4 Feel BlueHDi 100 BVM",

    "../images/e9.jpg",
    "1. registracija 2016",
    "Prevoženih 20000 km",
    "Gorivo diesel motor",
    "Menjalnik ročni menjalnik",
    "Motor 1560 ccm",
    "../images/example-add-1.png",
    "10.000 $"
  );
  generateCar(
    "Audi A6 Avant 2.0 TDI ultra quattro S tronic 140kW",

    "../images/e10.jpg",
    "1. registracija 2017",
    "Prevoženih 213289 km",
    "Gorivo diesel motor",
    "Menjalnik avtomatski menjalnik",
    "Motor 1968 ccm",
    "../images/example-add-1.png",
    "11.000 $"
  );
  generateCar(
    "      BMW serija 3 Cabrio: 320i  cabrio+125KW+SLO+BIXENON+ALU+USNJE+BREZPOLOGA",

    "../images/e11.jpg",
    "1. registracija 2007",
    "Prevoženih 196400 km",
    "Gorivo bencinski motor",
    "Menjalnik ročni menjalnik",
    "Motor 1995 ccm",
    "../images/example-add-1.png",
    "12.000 $"
  );
  generateCar(
    " Renault Captur Intens TCe 90 - Slovenski - 1. Lastnica -  Odličen",
    "../images/e12.jpg",
    "1. registracija 2019",
    "Prevoženih 74400 km",
    "Gorivo bencinski motor",
    "Menjalnik ročni menjalnik",
    "Motor 898 ccm",
    "../images/example-add-1.png",
    "13.000 $"
  );
  generateCar(
    " BMW serija 1: 128ti-AUT.-HITRI KREDIT-LEASING-TOVARNIŠKA GARAN.",
    "../images/e13.jpg",
    "1. registracija 2023",
    "Prevoženih 1500 km",
    "Gorivo bencinsi motor",
    "Menjalnik avtomatski menjalnik",
    "Motor 1998 ccm",
    "../images/example-add-1.png",
    "14.000 $"
  );
  generateCar(
    "Mazda Mazda3 1.6i+FACELIFT+SLO",

    "../images/e14.jpg",
    "1. registracija 2023",
    "Prevoženih 2500 km",
    "Gorivo plin",
    "Menjalnik avtomatski menjalnik",
    "Motor 1998 ccm",
    "../images/example-add-1.png",
    "15.000 $"
  );
  generateCar(
    "Mazda Mazda3 1.4i SLO POREKLO-KLIMA-ISOFIX",

    "../images/e15.jpg",
    "1. registracija 2023",
    "Prevoženih 30000 km",
    "Gorivo bencinski motor",
    "Menjalnik avtomatski menjalnik",
    "Motor 2000 ccm",
    "../images/example-add-1.png",
    "16.000 $"
  );
  generateCar(
    " Mazda Mazda5 1.8i CE+7.SEDEŽEV+AVTO.KLIMA+ALU+RADIO CD",

    "../images/e17.jpg",
    "1. registracija 2015",
    "Prevoženih 10000 km",
    "Gorivo bencinski motor",
    "Menjalnik avtomatski menjalnik",
    "Motor 1998 ccm",
    "../images/example-add-1.png",
    "17.000 $"
  );
  generateCar(
    "Mazda Demio",

    "../images/e18.jpg",
    "1. registracija 2023",
    "Prevoženih 15000 km",
    "Gorivo bencinski motor",
    "Menjalnik avtomatski menjalnik",
    "Motor 1900 ccm",
    "../images/example-add-1.png",
    "18.000 $"
  );
  generateCar(
    " Mazda Mazda5 1.8i CE 7 SEDEŽEV-KLIMA-SLOVENSKA-1.LASTNIK",

    "../images/e19.jpg",
    "1. registracija 2023",
    "Prevoženih 50000 km",
    "Gorivo e-pogon",
    "Menjalnik avtomatski menjalnik",
    "Motor 1500 ccm",
    "../images/example-add-1.png",
    "19.000 $"
  );
  generateCar(
    "  Hyundai i30 Fastback Hyundai i30 2.0 T-GDI N PERFORMANCE   PANORAMA-LED",

    "../images/e20.jpg",
    "1. registracija 2023",
    "Prevoženih 8000 km",
    "Gorivo e-pogon",
    "Menjalnik avtomatski menjalnik",
    "Motor 2300 ccm",
    "../images/example-add-1.png",
    "20.000 $"
  );
  generateCar(
    "Hyundai Kona 1.0 T-GDI 120 Style - AKCIJA",

    "../images/e21.jpg",
    "1. registracija 2023",
    "Prevoženih 2000 km",
    "Gorivo plin",
    "Menjalnik avtomatski menjalnik",
    "Motor 500 ccm",
    "../images/example-add-1.png",
    "21.000 $"
  );
  generateCar(
    "Audi A6 Avant 3.0 TDI clean diesel S tronic 160kW",

    "../images/e22.jpg",
    "1. registracija 1990",
    "Prevoženih 18000 km",
    "Gorivo bencinski motor",
    "Menjalnik avtomatski menjalnik",
    "Motor 1998 ccm",
    "../images/example-add-1.png",
    "22.000 $"
  );
  generateCar(
    "   Hyundai Kona 1.0 T-GDI-1 LASTNIK-SAMO         70.137-KAMERO-LED-ODLIČEN",

    "../images/e23.jpg",
    "1. registracija 2015",
    "Prevoženih 37000 km",
    "Gorivo diesel motor",
    "Menjalnik avtomatski menjalnik",
    "Motor 1990 ccm",
    "../images/example-add-1.png",
    "23.000 $"
  );
}
