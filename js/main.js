const products = [
  {
    name: "Rollos de Canela",
    price: "$5.500",
    details:
      "6 Suaves y esponjosos Rollos de canela, con salsa de queso crema.",
    availability: "Por Encargo",
    imagesrc: "rollos_de_canella",
    tag: "postre",
  },
  {
    name: "Pan de Platano",
    price: "$2.000",
    details: "Delicioso pan de platano, ideal para compartir",
    availability: "Por Encargo",
    imagesrc: "pan_de_platano",
    tag: "postre",
  },
  {
    name: "Alfajores de Maicena",
    price: "$2.500",
    details:
      "12 alfajores de maicena suavecitos rellenos de dulce de leche, espolvoreado de azúcar glass. ",
    availability: "Por Encargo",
    imagesrc: "alfajores",
    tag: "postre",
  },
  {
    name: "Chocotejas",
    price: "$3.500",
    details:
      "12 deliciosas chocotejas rellenas con dulce de leche y fruto seco a elección (nuez, almendra, uva pasa, coco) ideal para compartir con la familia y amigos. ",
    availability: "Por Encargo",
    imagesrc: "chocotejas",
    tag: "postre",
  },
  {
    name: "Alfajor Marplatense",
    price: "$4.500",
    details:
      "6 deliciosos alfajores de chocolate estilo Marplatense rellenos con dulce de leche y bañados con chocolate. ",
    availability: "Por Encargo",
    imagesrc: "alfajores-marplatense",
    tag: "postre",
  },
  {
    name: "Bizcocho de Yogurt Natural",
    price: "$2.000",
    details:
      "Delicioso bizcocho de yogurt natural, es suave y esponjoso ideal para degustar en la once. ",
    availability: "Por Encargo",
    imagesrc: "bizcocho_yogurt",
    tag: "postre",
  },
  {
    name: "Brownie",
    price: "$4.500",
    details: "Delicioso y suave Brownie.",
    availability: "Por Encargo",
    imagesrc: "brownie",
    tag: "postre",
  },
  {
    name: "Queque de Naranja",
    price: "$2.500",
    details: "Suave y delicioso queque de naranja.",
    availability: "Por Encargo",
    imagesrc: "queque_naranja",
    tag: "postre",
  },
  {
    name: "Queque de Zucchini",
    price: "$2.500",
    details: "Suave y delicioso queque de Zucchini con toque de naranja.",
    availability: "Por Encargo",
    imagesrc: "queque_zucchini",
    tag: "postre",
  },
  {
    name: "Empanadas Dulces",
    price: "$1.000",
    details:
      "Suaves y deliciosas empanadas dulces con relleno de manzana o fruta de estacion.",
    availability: "Por Encargo",
    imagesrc: "empanada_dulce",
    tag: "postre,empanada",
  },
  {
    name: "Ceviche de Pescado",
    price: "$9.000",
    details:
      "Pescado cortado en trozos pequeños  marinado en un preparado de jugo de limón, sal, pimienta, cebolla y cilantro,acompañado de camote y choclo al mejor estilo peruano.",
    availability: "Por Encargo",
    imagesrc: "ceviche_pescado",
    tag: "ceviche,fondo,pescado",
  },
  {
    name: "Ceviche Mixto de Peru",
    price: "$9.000",
    details:
      "Pescado cortado en trozos pequeños con mixtura de mariscos, marinados en jugo de limón, ají, cebolla cortada en juliana, cilantro, sal y pimienta, acompañado de camote y choclo.",
    availability: "Por Encargo",
    imagesrc: "ceviche_mixto",
    tag: "ceviche,fondo,pescado",
  },
  {
    name: "Empanadas de Pollo/Vacuno",
    price: "$1.000",
    details:
      "Suaves y deliciosas empanadas peruanas rellenas de pollo o carne de vacuno,cebolla, huevo y uva pasa.",
    availability: "Por Encargo",
    imagesrc: "empanada_vacuno",
    tag: "vacuno,pollo,fondo,empanada",
  },
  {
    name: "Aji de Gallina",
    price: "$7.000",
    details:
      "Crema espesa en base a leche, pan, ají amarillo sin picante, con pollo deshilachado, acompañado de arroz, lechuga, rodajas de papa, aceiruna negra y huevo cocido.",
    availability: "Por Encargo",
    imagesrc: "aji_gallina",
    tag: "pollo,fondo,arroz",
  },
  {
    name: "Arroz Chaufa de Pollo",
    price: "$8.500",
    details:
      "Trozos de pollo salteado con pimentón rojo, kion, cebollin, arroz graneado, tortilla de huevo, rodajas de salchicha, sazonado con salsa de soya.",
    availability: "Por Encargo",
    imagesrc: "chaufa_pollo",
    tag: "pollo,fondo,arroz,chaufa",
  },
  {
    name: "Arroz con Mariscos",
    price: "$10.000",
    details:
      "Arroz elaborado con mixtura de mariscos, cebolla, pimentón rojo y arbejas.",
    availability: "Por Encargo",
    imagesrc: "arroz_mariscos",
    tag: "fondo,arroz,pescado",
  },
  {
    name: "Chaufa de Mariscos",
    price: "$8.000",
    details:
      "Arroz elaborado con mixtura de mariscos, salteado con pimentón rojo, kion, cebollin, tortilla de huevo, sazonado con salsa de soya.",
    availability: "Por Encargo",
    imagesrc: "chaufa_mariscos",
    tag: "fondo,arroz,pescado,chaufa",
  },
];

const images = "./images/resized";
function listProducts(productList, filters = null) {
  //filters should be an array of strings
  const productlist = document.querySelector("#productlist");
  productlist.innerHTML = "";

  if (filters.length > 0) {
    filterList = productList.filter((product) => {
      //console.log(filters, product, filters.includes(product.name))

      let tags = product.tag.split(",");

      contains = filters.every((element) => {
        //console.log(element,tags)
        return tags.includes(element);
      });
      //console.log(contains);

      return contains;
    });
    //console.log(filterList);
    productList = filterList;
  }

  productList.forEach((product) => {
    //console.log(week.name);
    let name = product.name;
    let price = product.price;
    let imagesrc = `${product.imagesrc}_small.jpg`;
    let tag = product.tag.split(",");

    let newItem = document.createElement("div");
    newItem.classList.add("productCard");
    newItem.setAttribute("tags", `${tag}`);
    newItem.setAttribute("product", name);
    newItem.addEventListener("click", () => {
      listProductsDetails(newItem.getAttribute("product"));
    });

    let newName = document.createElement("h3");
    newName.innerHTML = name;
    newName.classList.add("name");

    let newImg = document.createElement("img");
    newImg.src = `${images}/${imagesrc}`;
    newImg.alt = name;
    newImg.classList.add("productImage");

    let newPrice = document.createElement("p");
    newPrice.innerHTML = price;
    newPrice.classList.add("price");

    newItem.append(newName, newImg, newPrice);

    productlist.appendChild(newItem);
  });
}

function buildTagList(productList) {
  let tagList = [];
  productList.forEach((product) => {
    let perProductTag = product.tag.split(",");
    perProductTag.forEach((tag) => {
      //const tagUpped = tag.charAt(0).toUpperCase() + tag.slice(1);
      tagList.push(tag);
    });
  });

  let uniquetagList = [...new Set(tagList)];
  return uniquetagList;
}

function listProductsDetails(selectedProduct) {
  let productlist = document.querySelector("#productlist");
  let product = products.find((product) => product.name === selectedProduct);
  const detaildiv = document.querySelector(".details");
  detaildiv.classList.remove("hidden");
  detaildiv.addEventListener("click",() => detaildiv.classList.add("hidden"))
  detaildiv.scrollIntoView();
  detaildiv.innerHTML = "";
  let name = product.name;
  let price = product.price;
  let details = product.details;
  let availability = product.availability;
  let imagesrc = product.imagesrc;
  let tag = product.tag.split(",");

  let newItem = document.createElement("div");
  newItem.classList.add("productCardLarge");

  let newName = document.createElement("h3");
  newName.innerHTML = name;
  newName.classList.add("nameLarge");

  let newImg = document.createElement("img");
  newImg.src = `${images}/${imagesrc}_small.jpg`;
  newImg.alt = name;
  newImg.classList.add("productImageLarge");

  let newDet = document.createElement("p");
  newDet.innerHTML = details;
  newDet.classList.add("detailsLarge");

  let newPrice = document.createElement("p");
  newPrice.innerHTML = price;
  newPrice.classList.add("priceLarge");

  let newAvail = document.createElement("p");
  newAvail.textContent = `Disponibilidad: ${availability}`;
  newAvail.classList.add("availabilityLarge");

  let tags = newItem.append(newName, newImg, newDet, newPrice, newAvail);

  detaildiv.appendChild(newItem);
}

function buildFilterButtons() {
  const filterbuttons = buildTagList(products);
  const filterIcons = document.querySelector("#filterIcons");
  filterbuttons.forEach((filtername) => {
    let button = document.createElement("p");
    // let closeX = document.createElement("span");
    // closeX.textContent = "X ";
    // closeX.className = "hidden";
    let buttonName = document.createElement("span");
    button.append(buttonName);
    buttonName.textContent = filtername;
    button.id = filtername;
    button.className = "filterButtons";
    filterIcons.appendChild(button);
    button.addEventListener("click", selected);
  });
}

function selected(e) {
  //closeX = document.querySelector(`#${e.currentTarget.id} span`);
  e.currentTarget.classList.toggle("selected");
  //closeX.classList.toggle("hidden");
  const selectedFilters = document.querySelectorAll(".selected");
  let filterList = [];
  selectedFilters.forEach((element) => {
    filterList.push(element.id);
  });
  //console.log(filterList)
  listProducts(products, filterList);
}

listProducts(products, []);
buildFilterButtons();
