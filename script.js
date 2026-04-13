function scrollToContact() {
    document.getElementById("contacto").scrollIntoView({
        behavior: "smooth"
    });
}

// Simulación de envío de formulario
document.querySelector("form").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Mensaje enviado correctamente");
});
