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
});