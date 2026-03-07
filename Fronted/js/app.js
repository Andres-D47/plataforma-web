console.log("JS conectado")
const registerForm = document.getElementById("registerForm");

if (registerForm) {
    registerForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        let users = JSON.parse(localStorage.getItem("users")) || [];

        const userExists = users.find(user => user.email === email);

        if(userExists) {
            document.getElementById("message").innerText = "Este correo ya fue registrado";
            return;

        }

        const newUser = {
            name: name,
            email: email,
            password: password
        };

        users.push(newUser);

        localStorage.setItem("users", JSON.stringify(users));

        document.getElementById("message").innerText = "Usuario registrado correctamente";

        registerForm.requestFullscreen();

    });
}