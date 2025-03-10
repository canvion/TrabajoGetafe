document.addEventListener("DOMContentLoaded", function () {
    const btnModo = document.getElementById("modoOscuro");

    btnModo.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");

        // Guardar preferencia en localStorage
        if (document.body.classList.contains("dark-mode")) {
            localStorage.setItem("modo", "oscuro");
            btnModo.textContent = "☀️ Modo Claro";
        } else {
            localStorage.setItem("modo", "claro");
            btnModo.textContent = "🌙 Modo Oscuro";
        }
    });

    // Aplicar la preferencia guardada al cargar la página
    if (localStorage.getItem("modo") === "oscuro") {
        document.body.classList.add("dark-mode");
        btnModo.textContent = "☀️ Modo Claro";
    }

    // Función para mostrar/ocultar la sección de comentarios
    function toggleComentarios() {
        const seccion = document.getElementById("seccionComentarios");
        seccion.style.display = seccion.style.display === "none" ? "block" : "none";
    }

    // Función para agregar comentarios a la lista
    function agregarComentario() {
        const input = document.getElementById("comentarioInput");
        const comentario = input.value.trim(); // Elimina espacios innecesarios

        if (comentario) {
            const lista = document.getElementById("listaComentarios");
            const nuevoComentario = document.createElement("li");
            nuevoComentario.textContent = comentario;
            lista.appendChild(nuevoComentario);

            input.value = ""; // Limpia el campo de entrada
        } else {
            alert("Por favor, escribe un comentario antes de enviarlo.");
        }
    }

});
