document.addEventListener("DOMContentLoaded", () => {
    // Seleccionar todos los artículos de jugadores
    const jugadores = document.querySelectorAll("article");

    jugadores.forEach(jugador => {
        // Cambiar el fondo al pasar el mouse
        jugador.addEventListener("mouseenter", () => {
            jugador.style.backgroundColor = "#0077cc"; // Azul Getafe
            jugador.style.color = "white";
            jugador.style.transform = "scale(1.05)";
            jugador.style.transition = "all 0.3s ease";
        });

        // Restaurar el estilo al salir el mouse
        jugador.addEventListener("mouseleave", () => {
            jugador.style.backgroundColor = "";
            jugador.style.color = "";
            jugador.style.transform = "scale(1)";
        });

        // Resaltar al hacer clic
        jugador.addEventListener("click", () => {
            if (jugador.classList.contains("resaltado")) {
                jugador.classList.remove("resaltado");
                jugador.style.border = "";
            } else {
                jugador.classList.add("resaltado");
                jugador.style.border = "3px solid gold";
            }
        });
    });
});
