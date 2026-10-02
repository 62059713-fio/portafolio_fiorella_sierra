function pop_up(mensaje) {
  alert(mensaje);
}

// Seleccionamos el formulario
const formulario = document.getElementById("contactForm");

// Evento cuando se envía el formulario
formulario.addEventListener("submit", function (evento) {
  // Evita que la página se recargue
  evento.preventDefault();

  // Muestra el mensaje
  pop_up("Mensaje enviado correctamente");

  // Limpia los campos
  formulario.reset();
});
