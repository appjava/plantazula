if ("serviceWorker" in navigator) {
	  window.addEventListener("load", function() {
		navigator.serviceWorker
		  .register("/serviceWorker.js")
		  .then(res => console.log("service worker registered"))
		  .catch(err => console.log("service worker not registered", err))
	  })
	}


let shopItemsData = [];

let suculentas = [
  {
    id: "s1",
    name: "Suculenta Rosa",
    price: 15000,
    desc: "Plantas resistentes con encanto natural.",
    img: "images/rosaSuculenta.png",
  },
  {
    id: "s2",
    name: "Suculenta Bananito",
    price: 15000,
    desc: "Belleza botánica de bajo cuidado.",
    img: "images/bananoSuculenta.png",
  },
  {
    id: "s3",
    name: "Suculenta Cactus",
    price: 15000,
    desc: "Hojas exuberantes y colores cautivadores.",
    img: "images/suculentaCactusNavidad.jpeg",
  }
];

let bromelias = [
  {
    id: "b1",
    name: "Bromelia Pluma",
    price: 20000,
    desc: "Elegancia natural con toque exótico.",
    img: "images/bromeliaPluma.jpeg",
  },
  {
    id: "b2",
    name: "Bromelia Rosa",
    price: 20000,
    desc: "Toque de selva en tu espacio.",
    img: "images/rosaBromelia.jpg",
  },
  {
    id: "b3",
    name: "Bromelia Estrella",
    price: 20000,
    desc: "Flores tropicales en vivos colores.",
    img: "images/bromeliaEstrella.jpeg",
  },
];
let orquideas = [
  {
    id: "o1",
    name: "Orquidea Zapatico",
    price: 30000,
    desc: "Flores únicas de gran sofisticación.",
    img: "images/orquideaZapato.jpg",
  },
  {
    id: "o2",
    name: "Orquidea Crespa",
    price: 30000,
    desc: "Belleza etérea en tu hogar.",
    img: "images/crespaOrquídea.png",
  },
  {
    id: "o3",
    name: "Orquidea Petalo",
    price: 30000,
    desc: "Elegancia en cada pétalo.",
    img: "images/orquideaPetalo.jpeg",
  }
];
let anturios = [
  {
    id: "an1",
    name: "Anturio Rojo",
    price: 25000,
    desc: "Toque de color en hojas exóticas.",
    img: "images/anturioRojo.jpeg",
  },
  {
    id: "an2",
    name: "Anturio Salmón",
    price: 25000,
    desc: "Exuberancia tropical en cada planta.",
    img: "images/anturioSalmon.jpeg",
  },
  {
    id: "an3",
    name: "Anturio Mini",
    price: 10000,
    desc: "Elegancia natural con acento de selva.",
    img: "images/anturioMini.jpeg",
  }
];
let cartuchos = [
  {
    id: "ca1",
    name: "Cartucho Blanco",
    price: 25000,
    desc: "Toque floral exquisito y original.",
    img: "images/cartuchoBlanco.png",
  },
  {
    id: "ca2",
    name: "Cartucho Color",
    price: 25000,
    desc: "Inflorescencias de elegancia singular.",
    img: "images/cartuchoColor.png",
  },
  {
    id: "ca3",
    name: "Cartucho Mini",
    price: 10000,
    desc: "Flores con forma embellecedora.",
    img: "images/cartuchoMini.jpg",
  }
];
let platiceros = [
  {
    id: "p1",
    name: "Platicero Cuerno",
    price: 60000,
    desc: "Verdor vibrante y toque de selva.",
    img: "images/platiceroCuerno.jpg",
  },
  {
    id: "p2",
    name: "Platicero Oreja",
    price: 60000,
    desc: "Elegancia tropical en cada planta.",
    img: "images/platiceroOreja.jpg",
  },
  {
    id: "p3",
    name: "Platicero Común",
    price: 45000,
    desc: "Hojas exóticas en forma de lanza.",
    img: "images/platiceroComun.jpg",
  }
];
let complementos = [
  {
    id: "c1",
    name: "Estantería Bambú",
    price: 90000,
    desc: "Ideal para exhibir tus plantas con estilo y armonía.",
    img: "images/estanteBambu.jpg",
  },
  {
    id: "c2",
    name: "Matera Concreto",
    price: 45000,
    desc: "Aspecto contemporáneo y duradero, un hogar sólido y elegante para tus plantas.",
    img: "images/materaConcreto.jpg",
  },
  {
    id: "c3",
    name: "Soporte Bambú",
    price: 30000,
    desc: "Para elevar tus plantas y crear una presentación atractiva, simplicidad y belleza.",
    img: "images/soporteBambu.jpg",
  },
  {
    id: "c4",
    name: "Canasta Bambú 30x30",
    price: 30000,
    desc: "Toque rústico y tropical, una forma única de presentar y proteger tus plantas.",
    img: "images/bambo30x30.png",
  },
  {
    id: "c5",
    name: "Canasta Bambú 20x20",
    price: 25000,
    desc: "Fusión perfecta de funcionalidad y estilo para exhibir tus verdaderos tesoros verdes.",
    img: "images/bambo20x20.png",
  },
  {
    id: "c6",
    name: "Canasta Bambú 40x20",
    price: 30000,
    desc: "Funcionalidad y estilo rústico.",
    img: "images/bambo40x20.png",
  },
  {
    id: "c7",
    name: "Combo Bambú SixPack",
    price: 160000,
    desc: "Set x6 Canasta Bambu: 20x20 (2und), 30x30 (2und), 40x20 (2und).)",
    img: "images/BamboSixPack.png",
  },
  {
    id: "c8",
    name: "Abono Orgánico",
    price: 10000,
    desc: "Una forma natural de nutrir y asegurar su esplendor en cada temporada.",
    img: "images/abonoOrganico.png",
  },
  {
    id: "c9",
    name: "Set x100 Ganchos Cadena",
    price: 30000,
    desc: "Ganchos en Acero galvanizado resistentes y duraderos.",
    img: "images/set100undGancho_sized.png",
  }
];

suculentas.forEach((planta) => {
  shopItemsData.push(planta);
});
bromelias.forEach((planta) => {
  shopItemsData.push(planta);
});
orquideas.forEach((planta) => {
  shopItemsData.push(planta);
});
anturios.forEach((planta) => {
  shopItemsData.push(planta);
});
cartuchos.forEach((planta) => {
  shopItemsData.push(planta);
});
platiceros.forEach((planta) => {
  shopItemsData.push(planta);
});
complementos.forEach((planta) => {
  shopItemsData.push(planta);
});


