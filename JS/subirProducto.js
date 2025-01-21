document.getElementById("btnEnviar").addEventListener("click", function (e) {
    e.preventDefault();

    const nombre = document.getElementById("productName").value.trim();
    const descripcion = document.getElementById("productDescription").value.trim();
    const categoria = document.getElementById("productCategory").value.trim();
    const precio = document.getElementById("productPrice").value.trim();
    const stock = document.getElementById("productStock").value.trim();
    const imagen = document.getElementById("imagenProducto").value.trim();

    const alerta = document.getElementById("alerta");

    alerta.classList.add("d-none");
    alerta.innerHTML = "";

    let errores = [];

    if (nombre === "") errores.push("El nombre del producto es obligatorio.");
    if (descripcion === "") errores.push("La descripción no puede estar vacía.");
    if (categoria === "Selecciona") errores.push("Debes seleccionar una categoría.");
    if (!precio || isNaN(precio) || parseFloat(precio) <= 0) errores.push("El precio debe ser un número mayor a 0.");
    if (!stock || isNaN(stock) || parseInt(stock, 10) < 0) errores.push("El stock debe ser un número mayor o igual a 0.");

    if (imagenInput && imagenInput.files.length > 0) {
        const file = imagenInput.files[0];
        imagen = URL.createObjectURL(file);
    } else {
        errores.push("Debe seleccionarse una imagen para el producto.");
    }

    if (errores.length > 0) {
        alerta.classList.remove("d-none", "alert-success");
        alerta.classList.add("alert-error");
        alerta.innerHTML = errores.join("<br>");
    } else {
        alerta.classList.remove("d-none", "alert-error");
        alerta.classList.add("alert-success");
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
        "precio": parseFloat(precio),
        "stock": parseInt(stock, 10),
        "imagen": imagen
    };

    console.log(JSON.stringify(producto));
}); 