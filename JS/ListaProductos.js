// Este es un comentario en JavaScript

// Declaración de variables
let nombre = "Juan";  // Variable que almacena una cadena de texto
const edad = 30;      // Variable constante que no se puede modificar

// Función para saludar
function saludar() {
    console.log("¡Hola, " + nombre + "!");
}

// Llamada a la función
saludar();

// Uso de condicionales
if (edad >= 18) {
    console.log("Eres mayor de edad.");
} else {
    console.log("Eres menor de edad.");
}

// Bucle para iterar números del 1 al 5
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

// Objeto simple
const persona = {
    nombre: "Ana",
    edad: 25,
    saludar: function() {
        console.log("Hola, soy " + this.nombre);
    }
};

// Llamada al método del objeto
persona.saludar();

