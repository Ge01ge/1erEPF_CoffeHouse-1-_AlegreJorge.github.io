class Producto {
  constructor(nombre, precio, id, calidCantidad) {
    this.nombre = nombre;
    this.precio = precio;
    this.id = id;
    this.calidCantidad = calidCantidad;
  }
}

const stock = [
  {
    nombre: "grano Liberico ",
    precio: 200,
    id: 1,
    calidCantidad: " (100gr) calidad Premium",
  },
  {
    nombre: "grano Robusto ",
    precio: 300,
    id: 2,
    calidCantidad: "(100gr) calidad Premium",
  },
  {
    nombre: "grano Arabico ",
    precio: 150,
    id: 3,
    calidCantidad: " (100gr) calidad Premium",
  },
];
stock.push(new Producto("NesCafe ", 700, 4, "500gr"));
stock.push(new Producto("3 Hermanos ", 800, 5, "500gr"));
stock.push(new Producto("Batidor de Cafe", 700, 6, "Unidad"));
stock.push(new Producto("set taza de cafe Blanca ", 1800, 7, "6 Unidades"));

// console.log(stock)

alert(
  "      Hola Bienvenido a Coffe House! \n  \n Aqui encontratas todos los insumos y accesorios que un amantes del cafe podria desear"
);

let listado = "Lista de productos \n";
stock.map((element) => {
  listado += `${element.id} - ${element.nombre}  $${element.precio} x ${element.calidCantidad} \n`;
});

alert(listado);

let carrito = [];

function sendCarrito() {
  let productoId = Number(prompt("ID producto:"));
  let cantidad = Number(prompt("Cantidad:"));
  let producto = stock.find((product) => product.id === productoId);
  producto.cantidad = cantidad;
  producto.total = producto.precio * cantidad;
  carrito.push(producto);
}

function calcularTotal(carrito) {
  let total = 0;
  carrito.forEach((producto) => {
    total += producto.total;
  });
  return total;
}


// Mala mia aca, la funcion estaba escrita al reves, isValidYesNo() lo que hace es indicar si la entrada del usuario es válida.
function isValidYesNo(option) {
  return (
    option == "si" ||
    option == "SI" ||
    option == "Si" ||
    option == "no" ||
    option == "No" ||
    option == "NO"
  );
}

function isNo(option) {
  return option === "no" || option === "No" || option === "NO";
}

function isYes(option) {
  return option === "si" || option === "Si" || option === "SI";
}

// Se toma la primera opicón:
let option1 = prompt(`Desea comprar algo: si, no.`);
// El ! es para negar, es decir, si isValidOption() retorna true, el ! lo convierte a false, y viceversa.
// Entonces, "mientras la opcion no sea valida" seguimos pidiendo el dato por prompt.
while (!isValidYesNo(option1)) {
  option1 = prompt(`Desea comprar algo: si, no.`);
}

// Mientras la opción siga siendo SI, se llama a la función que captura el producto, cuando no es Si, sale.
while (isYes(option1)) {

  alert("te recordamos la " + listado);

  sendCarrito();

  calcularTotal(carrito); 
  

  option1 = prompt(`Desea seguir comprando: si, no.`);
  while (!isValidYesNo(option1)) {
    option1 = prompt(`Ingrese una opción valida: si, no.`);
  }
}

  alert(" A continuacion te mostramos una lista en detalle de cada seleccion:");

// aca el alert del (forEach) me sale en 1 por cada vez que compre... Es por como esta configurado arriba ¿una compra una solicitud? y de ser asi deberia hacer algo asi como en tu after ir generando array y cargarlos ahi?

// O si quisiera que mostrara todos juntos como deberia hacer: 
// -> asignarle una variable y mostrar la variable en el alert? 
// -> o incorporar el forEach dentrod e una funcion por ej: "mostrarSubTotal()"" y llamarla aca?

carrito.forEach((carrito) =>{
  alert(`poducto: ${carrito.nombre}, unidades: ${carrito.cantidad} \n su total a pagar por este producto es de: ${carrito.nombre}x${carrito.cantidad} = ${carrito.cantidad * carrito.precio}`)
})

alert(`El total de su compra es de: $${calcularTotal(carrito)}`);

alert(
  `    En breve nos contactaremos contigo para definir el modo de pago... \n Gracias por comprar con nosotros `);

while (isNo(option1)) {
  alert(" Gracias por visitarnos vuelva pronto...");
  break
}

