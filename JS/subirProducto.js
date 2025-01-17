const nombreProducto = document.getElementById('nombre').value;
const descripcionProducto = document.getElementById('descripcion').value;
const categoriaProducto = document.getElementById('categoria').value;
const precioProducto = document.getElementById('precio').value;
const stockProducto = document.getElementById('stock').value;

const producto = {
  "nombre": nombreProducto,
  "descripcion": descripcionProducto,
  "categoria": categoriaProducto,
  "precio": precioProducto,
  "stock": stockProducto
};

const json = JSON.stringify(producto);
const elemento = document.getElementById('resultado');
elemento.innerHTML = json;