console.log("archivo conectado correctamente")
const form = document.getElementById("loginform");

if (form) {
    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const error = document.getElementById("error");

        // Usuario simulado
        const usuarioCorrecto = "admin@gmail.com";
        const passwordCorrecto = "123456";

        if (email === usuarioCorrecto && password === passwordCorrecto) {
            window.location.href = "dashboard.html";
        } else {
            error.textContent = "Correo o contraseña incorrectos";
        }
    });
}