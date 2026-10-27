const formulario = document.getElementById("formulario");
const respuesta = document.getElementById("respuesta");

formulario.addEventListener("submit", function(evento) {
    evento.preventDefault();

    respuesta.textContent =
        "¡Mensaje enviado correctamente! Esperando respuesta.";

    formulario.reset();
});
