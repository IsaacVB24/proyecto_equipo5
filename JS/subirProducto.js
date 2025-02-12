
document.getElementById("btnEnviar").addEventListener("click", function (e) {
  e.preventDefault();

  const nombre = document.getElementById("productName").value.trim();
  const descripcion = document.getElementById("productDescription").value.trim();
  const categoria = document.getElementById('productCategory').options[document.getElementById('productCategory').selectedIndex];
  const precio = document.getElementById("productPrice").value.trim();
  const stock = document.getElementById("productStock").value.trim();
  const alerta = document.getElementById("alerta");
  const imagen = document.querySelector('#imagenProducto');

  let errores = [];
  if (nombre === "") errores.push("El nombre del producto es obligatorio.");
  if (descripcion === "") errores.push("La descripción no puede estar vacía.");
  if (categoria.value == 0) errores.push("Debes seleccionar una categoría.");
  if (!precio || isNaN(precio) || parseFloat(precio) <= 0) errores.push("El precio debe ser un número mayor a 0.");
  if (!stock || isNaN(stock) || parseInt(stock, 10) < 0) errores.push("El stock debe ser un número mayor o igual a 0.");
  if (!imagen.src || imagen.src === "") errores.push("Debe seleccionarse una imagen para el producto.");

  if (errores.length > 0) {
    alerta.classList.remove("d-none");
    alerta.innerHTML = errores.join("<br>");
    return;
  } else {
    alerta.classList.remove("d-none");
    alerta.innerHTML = "¡Producto creado exitosamente!";
  }

  //  **Objeto producto**
  const producto = {
    "name": nombre,
    "descripcion": descripcion,
    "categoria": categoria.value,
    "precio": parseFloat(precio),
    "stock": parseInt(stock, 10),
    "img": imagen.src
  };

  //  **Enviar al backend  fetch**
  fetch("http://localhost:8080/api/productos/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(producto)
  })
  .then(response => {
    if (!response.ok) throw new Error("Error en la respuesta del servidor");
    return response.json();
  })
  .then(data => {
    console.log("Producto creado:", data);
    alerta.innerHTML += "<br>Producto guardado en la base de datos.";
    limpiarFormulario();
  })
  .catch(error => {
    console.error("Error:", error);
    alerta.innerHTML += "<br>Error al guardar el producto en el servidor.";
  });
});

// **Función para limpiar el formulario**
function limpiarFormulario() {
  document.getElementById("productName").value = "";
  document.getElementById("productDescription").value = "";
  document.getElementById("productCategory").value = "";
  document.getElementById("productPrice").value = "";
  document.getElementById("productStock").value = "";
  document.getElementById("imagenProducto").src = ""; 
}
