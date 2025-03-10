document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll("dl img"); // Selecciona todas las imágenes del `dl`
    const modal = document.createElement("div"); // Crea el modal
    modal.classList.add("modal");

    const modalImg = document.createElement("img");
    const closeBtn = document.createElement("span");
    closeBtn.innerHTML = "&times;";
    closeBtn.classList.add("close");

    modal.appendChild(closeBtn);
    modal.appendChild(modalImg);
    document.body.appendChild(modal);

    images.forEach((img) => {
        img.addEventListener("click", function () {
            modalImg.src = this.src;
            modal.style.display = "flex"; // Muestra el modal
        });
    });

    closeBtn.addEventListener("click", function () {
        modal.style.display = "none"; // Oculta el modal al cerrar
    });

    modal.addEventListener("click", function (e) {
        if (e.target === modal) {
            modal.style.display = "none"; // Oculta el modal al hacer clic fuera de la imagen
        }
    });
});