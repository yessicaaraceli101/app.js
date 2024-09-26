// Selecciona los elementos del DOM.
const inputRojo = document.getElementById('rojo');
const inputVerde = document.getElementById('verde');
const inputAzul = document.getElementById('azul');

const textoRojo = document.getElementById('texto-rojo');
const textoVerde = document.getElementById('texto-verde');
const textoAzul = document.getElementById('texto-azul');

// Valores iniciales para definir el color RGB.
let rojo = inputRojo.value;
let verde = inputVerde.value;
let azul = inputAzul.value;

// Muestra los valores iniciales en los elementos <p>.
textoRojo.textContent = rojo;
textoVerde.textContent = verde;
textoAzul.textContent = azul;

// Función para actualizar el color de fondo de la página.
function actualizarColor() {
  // Obtiene los valores actuales de los inputs
  rojo = inputRojo.value;
  verde = inputVerde.value;
  azul = inputAzul.value;

  // Cambia el color de fondo usando los valores RGB
  document.body.style.backgroundColor = `rgb(${rojo}, ${verde}, ${azul})`;

  // Actualiza los textos que muestran los valores actuales
  textoRojo.textContent = rojo;
  textoVerde.textContent = verde;
  textoAzul.textContent = azul;
}

// Agrega un event listener para el input de Rojo.
inputRojo.addEventListener('input', (e) => {
  // Actualiza el valor de la variable y el texto.
  actualizarColor();
});

// Agrega un event listener para el input de Verde.
inputVerde.addEventListener('input', (e) => {
  // Actualiza el valor de la variable y el texto.
  actualizarColor();
});

// Agrega un event listener para el input de Azul.
inputAzul.addEventListener('input', (e) => {
  // Actualiza el valor de la variable y el texto.
  actualizarColor();
});

// Inicializa el color de fondo al cargar la página
actualizarColor();