function cargarCarrito() {
  

    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    const carritoBody = document.getElementById("carrito-body");
    const totalProductos = document.getElementById("total-productos");
    const totalPagar = document.getElementById("total-pagar");

    carritoBody.innerHTML = ""; // Limpiar la tabla antes de actualizarla
    let totalCantidad = 0;
    let totalPrecio = 0;

    

    if (carrito.length === 0) {
        carritoBody.innerHTML = `<tr><td colspan="6" class="text-center">El carrito está vacío</td></tr>`;
        totalProductos.textContent = 0;
        totalPagar.textContent = "$0.00";
        return;
    }

    carrito.forEach((producto, index) => {
        // Convertir cantidad a número (por si se almacenó como string)
        let cantidad = parseInt(producto.cantidad) || 1;
        let precio = parseFloat(producto.precio) || 0;
        let totalProducto = cantidad * precio;
        totalCantidad += cantidad;
        totalPrecio += totalProducto;

        let fila = `
            <tr>
                <td><img src="${producto.img}" class="img-thumbnail" style="width: 50px; height: 50px;"></td>
                <td>
                    <a href="#" class="text-primary" onclick="abrirModalProducto(${index})">${producto.nombre || producto.name}</a>
                </td>
                <td>
                    <button class="btn btn-sm btn-outline-secondary" onclick="modificarCantidadCarrito(${index}, -1)">-</button>
                    <span id="cantidad_carrito_${index}">${cantidad}</span>
                    <button class="btn btn-sm btn-outline-secondary" onclick="modificarCantidadCarrito(${index}, 1)">+</button>
                </td>
                <td>$${precio.toFixed(2)}</td>
                <td>$${totalProducto.toFixed(2)}</td>
                <td><button class="btn btn-danger btn-sm" onclick="eliminarDelCarrito(${index})">X</button></td>
            </tr>
        `;
        carritoBody.insertAdjacentHTML("beforeend", fila);
    });

    totalProductos.textContent = totalCantidad;
    totalPagar.textContent = `$${totalPrecio.toFixed(2)}`;
}

function abrirModalProducto(index) {
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    let producto = carrito[index];

    if (!producto) return;

    // Eliminar modal previo si existe
    let modalElement = document.getElementById("modalProducto");
    if (modalElement.classList.contains("show")) {
        let modalInstance = bootstrap.Modal.getInstance(modalElement);
        if (modalInstance) {
            modalInstance.hide();
        }
    }

    document.getElementById("modalProductoLabel").textContent = producto.nombre || producto.name;
    document.getElementById("modalImagen").src = producto.img;
    
    // Asegurar que la descripción existe
    document.getElementById("modalDescripcion").textContent = producto.descripcion && producto.descripcion.trim() !== ""
        ? producto.descripcion
        : "No hay descripción disponible.";

    document.getElementById("modalPrecio").textContent = producto.precio.toFixed(2);
    document.getElementById("modalCantidad").textContent = producto.cantidad;

    // Mostrar el modal correctamente
    let modal = new bootstrap.Modal(modalElement);
    modal.show();
}

document.addEventListener("DOMContentLoaded", function() {
    let modal = document.getElementById("modalProducto");

    modal.addEventListener("shown.bs.modal", function () {
        let enlaces = modal.querySelectorAll(".modal-body a");
        enlaces.forEach(enlace => {
            enlace.style.color = "red";
            enlace.style.textDecoration = "underline";

            enlace.addEventListener("mouseenter", function() {
                this.style.color = "#f86927";
            });

            enlace.addEventListener("mouseleave", function() {
                this.style.color = "red";
            });
        });
    });
});


// Modificar cantidad de un producto en el carrito
function modificarCantidadCarrito(index, cambio) {
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    
    if (!carrito[index]) return; 

    carrito[index].cantidad = Math.max(1, (parseInt(carrito[index].cantidad) || 1) + cambio);

    localStorage.setItem("carrito", JSON.stringify(carrito));
    cargarCarrito();
}

// Eliminar producto del carrito
function eliminarDelCarrito(index) {
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    
    if (!carrito[index]) return; // Evita errores si el índice no existe

    carrito.splice(index, 1);
    localStorage.setItem("carrito", JSON.stringify(carrito));
    cargarCarrito();
}

// Cargar el carrito al abrir la página
document.addEventListener("DOMContentLoaded", cargarCarrito);

document.addEventListener("DOMContentLoaded", function() {
    cargarCarrito();

    // Detectar el botón de "Proseguir con el pago"
    const botonPagar = document.querySelector(".btn-strong-orange");

    if (botonPagar) {
        botonPagar.addEventListener("click", function() {
            verificarSesion();
        });
    }
});


document.addEventListener("DOMContentLoaded", function() {
    if (localStorage.getItem("logueado") !== "true") {
    }
    cargarCarrito();

    const botonPagar = document.querySelector(".btn-strong-orange");

    if (botonPagar) {
        botonPagar.addEventListener("click", function(event) {
            if (localStorage.getItem("logueado") !== "true") {
                event.preventDefault();
                mostrarAlerta("⚠️ Debes iniciar sesión antes de continuar con el pago.");
            } else {
                window.location.href = "pago.html";
            }
        });
    }
});


// Función para mostrar alerta flotante
function mostrarAlerta(mensaje) {
    let alerta = document.getElementById("alerta-flotante");

    if (!alerta) {
        alerta = document.createElement("div");
        alerta.id = "alerta-flotante";
        alerta.className = "alerta-flotante";
        document.body.appendChild(alerta);
    }

    alerta.textContent = mensaje;
    alerta.style.display = "block";

    setTimeout(() => {
        alerta.style.opacity = "1";
    }, 100);

    setTimeout(() => {
        alerta.style.opacity = "0";
        setTimeout(() => {
            alerta.style.display = "none";
        }, 500);
    }, 3000);
}
