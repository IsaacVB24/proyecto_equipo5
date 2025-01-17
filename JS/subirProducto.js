document.getElementById("btnEnviar").addEventListener("click", function (e) {
    e.preventDefault();

    const nombre = document.getElementById("productName").value.trim();
    const descripcion = document.getElementById("productDescription").value.trim();
    const categoria = document.getElementById("productCategory").value.trim();
    const precio = document.getElementById("productPrice").value.trim();
    const stock = document.getElementById("productStock").value.trim();
    const imagen = document.getElementById("productImagen").value.trim();

    const alerta = document.getElementById("alerta");

    const imagenP = document.querySelector('#imagenProducto');

    alerta.classList.add("d-none");
    alerta.innerHTML = "";

    let errores = [];

    if (nombre === "") errores.push("El nombre del producto es obligatorio.");
    if (descripcion === "") errores.push("La descripción no puede estar vacía.");
    if (categoria === "Selecciona") errores.push("Debes seleccionar una categoría.");
    if (precio === "" || isNaN(precio) || precio <= 0) errores.push("El precio debe ser un número mayor a 0.");
    if (stock === "" || isNaN(stock) || stock < 0) errores.push("El stock debe ser un número mayor o igual a 0.");

    if (errores.length > 0) {
        alerta.classList.remove("d-none", "alert-personalizada");
        alerta.classList.add("alert-personalizada");
        alerta.innerHTML = errores.join("<br>");
    } else {
        alerta.classList.remove("d-none", "alert-personalizada");
        alerta.classList.add("alert-personalizada");
        alerta.innerHTML = "¡Producto creado exitosamente!";
    }

    const imagenPlaceholder = document.getElementById('imagen-placeholder');
imagenPlaceholder.src = 'https://res.cloudinary.com/marketmexa/image/upload/v1737082184/GridArt_20250116_204607014_fszot5.png';


let imagenPr = input_imagen.src;

    console.log(categoria);

    // Falta añadir producto al arreglo que teníamos
    const producto = {
        "nombre": nombre,
        "descripcion": descripcion,
        "categoria": categoria,
        "precio": precio,
        "stock": stock,
        "img": null,
        "imagen": imagen
    };

    console.log(JSON.stringify(producto));
}); 