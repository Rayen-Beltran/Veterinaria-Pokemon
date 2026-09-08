

let cantidadProductos = 0;

function agregarAlCarrito() {
  cantidadProductos++;
  document.getElementById("contador").textContent = cantidadProductos;
}

function quitarDelCarrito() {
  if (cantidadProductos > 0) {
    cantidadProductos--;
    document.getElementById("contador").textContent = cantidadProductos;
  }
}
function mostrarProductos() {
  let product = document.getElementById("productos");
  if (!product) return;

  product.innerHTML = "";
  for (const producto of productoss) {
    product.innerHTML += `
      <div class="caluga">
        <img class="caluga-img" src="${producto.img}" alt="${producto.nombre}">
        <h2>${producto.nombre}</h2>
        <p>$${producto.precio}</p>
        <button onclick="agregarAlCarrito()">Agregar al carrito</button>
        <button onclick="quitarDelCarrito()">Eliminar</button>
      </div>`
    ;
  }
}

mostrarProductos();