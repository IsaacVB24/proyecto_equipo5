document.getElementById("btnEnviar").addEventListener("click", function (e) {
    e.preventDefault();

    const nombre = document.getElementById("productName").value.trim();
    const descripcion = document.getElementById("productDescription").value.trim();
    const categoria = get('productCategory').options[get('productCategory').selectedIndex];
    const precio = document.getElementById("productPrice").value.trim();
    const stock = document.getElementById("productStock").value.trim();
    const imagenInput = document.getElementById("productImagen");
    const alerta = document.getElementById("alerta");

    alerta.classList.add("d-none");
    alerta.innerHTML = "";

    let errores = [];
    let imagen = null;

    if (nombre === "") errores.push("El nombre del producto es obligatorio.");
    if (descripcion === "") errores.push("La descripción no puede estar vacía.");
    if (get('productCategory').options[get('productCategory').selectedIndex].value == 0) errores.push("Debes de seleccionar una categoría.");
    if (!precio || isNaN(precio) || parseFloat(precio) <= 0) errores.push("El precio debe ser un número mayor a 0.");
    if (!stock || isNaN(stock) || parseInt(stock, 10) < 0) errores.push("El stock debe ser un número mayor o igual a 0.");

    if (!get('imagenProducto').src) {
        errores.push("Debe de seleccionarse una imagen para el producto.");
    }
    /*
    Esto es lo que estaba en el if anterior pero me marca errores
    if (imagenInput && imagenInput.files.length > 0) {
        const file = imagenInput.files[0];
        imagen = URL.createObjectURL(file);
    } else {
        errores.push("Debe seleccionarse una imagen para el producto.");
    }
    */

    if (errores.length > 0) {
        alerta.classList.remove("d-none", "alert-personalizada");
        alerta.classList.add("alert-personalizada");
        alerta.innerHTML = errores.join("<br>");
        return;
    } else {
        alerta.classList.remove("d-none", "alert-personalizada");
        alerta.classList.add("alert-personalizada");
        alerta.innerHTML = "¡Producto creado exitosamente!";
        document.getElementById("productName").value = "";
        document.getElementById("productDescription").value = "";
        document.getElementById("productCategory").value = "";
        document.getElementById("productPrice").value = "";
        document.getElementById("productStock").value = "";
        get('imagenProducto').src = "";
    }
    
    const producto = {
        "name": nombre,
        "descripcion": descripcion,
        "categoria": categoria.value,
        "precio": parseFloat(precio),
        "stock": parseInt(stock, 10),
        "img": get('imagenProducto').src    // Aquí hace falta añadir el url creado por cloudinary
    };
    const productos = JSON.parse(localStorage.getItem('productos')) || [];

    productos.push(producto);

    localStorage.setItem('productos', JSON.stringify(productos));
});