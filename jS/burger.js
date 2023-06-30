// Declaración de variables y objetos
var carrito = [];
var total = 0;

// Función para agregar una hamburguesa al carrito
function agregarHamburguesa() {
  var cantidad = parseInt(prompt("Ingrese la cantidad de hamburguesas que desea:"));
  var precioUnitario = 10; // Precio por unidad de hamburguesa

  var subtotal = cantidad * precioUnitario;
  total += subtotal;

  carrito.push({ cantidad: cantidad, subtotal: subtotal });
}

// Función para mostrar el contenido del carrito
function mostrarCarrito() {
  console.log("Carrito de compras:");
  console.log("------------------");

  for (var i = 0; i < carrito.length; i++) {
    console.log(
      carrito[i].cantidad + " hamburguesa(s) - Subtotal: $" + carrito[i].subtotal
    );
  }

  console.log("------------------");
  console.log("Total: $" + total);
}

