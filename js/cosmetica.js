document.addEventListener("DOMContentLoaded", function() {
    const btn = document.querySelector('.btnsubmit');
    const input = document.getElementById('inputText');

    btn.addEventListener('click', function() {
        const email = input.value;

        if (typeof(Storage) !== "undefined") {
            // Almacenar el correo electrónico en el localStorage
            localStorage.setItem("email", email);
            console.log("Correo electrónico almacenado en el localStorage.");

            // Verificar si el correo electrónico se ha guardado correctamente
            const emailGuardado = localStorage.getItem("email");
            if (email === emailGuardado) {
                console.log("El correo electrónico se ha guardado correctamente en el localStorage.");
            } else {
                console.log("Ha ocurrido un error al guardar el correo electrónico en el localStorage.");
            }
        } else {
            console.log("Lo siento, tu navegador no soporta almacenamiento local.");
        }
    });
});