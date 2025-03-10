// 1. Estructura de datos
const productos = [
    { id: 1, nombre: "Camiseta Local", descripcion: "Camiseta oficial del Getafe CF", precio: 50 },
    { id: 2, nombre: "Bufanda", descripcion: "Bufanda con los colores del equipo", precio: 20 },
    { id: 3, nombre: "Balón", descripcion: "Balón oficial del Getafe CF", precio: 30 }
];

// Filtrar productos con precio menor a un valor dado
function filtrarPorPrecio(maxPrecio) {
    console.log(productos.filter(producto => producto.precio < maxPrecio));
}

// Ordenar productos por precio
function ordenarPorPrecio() {
    console.log([...productos].sort((a, b) => a.precio - b.precio));
}

// 2. Mostrar/Ocultar un elemento
function toggleElemento(id) {
    const elemento = document.getElementById(id);
    elemento.style.display = elemento.style.display === "none" ? "block" : "none";
}

// 3. Alternar entre modo claro y oscuro
function toggleModoOscuro() {
    document.body.classList.toggle("modo-oscuro");
}

// 4. Comentarios dinámicos
function toggleComentarios() {
    const seccionComentarios = document.getElementById("seccionComentarios");
    seccionComentarios.style.display = seccionComentarios.style.display === "none" ? "block" : "none";
}

function agregarComentario() {
    const comentario = document.getElementById("comentarioInput").value;
    if (comentario) {
        const lista = document.getElementById("listaComentarios");
        const nuevoComentario = document.createElement("li");
        nuevoComentario.textContent = comentario;
        lista.appendChild(nuevoComentario);
        document.getElementById("comentarioInput").value = ""; // Limpiar input
    }
}

// 5. Cambiar estilos al interactuar con elementos
function resaltarElemento(id) {
    document.getElementById(id).classList.toggle("resaltado");
}

// 6. Carrusel de imágenes
let index = 0;
function moverCarrusel(direccion) {
    const imagenes = document.querySelectorAll(".carrusel img");
    imagenes[index].classList.remove("visible");
    index = (index + direccion + imagenes.length) % imagenes.length;
    imagenes[index].classList.add("visible");
}

// 7. Miniaturas ampliables
function ampliarImagen(src) {
    document.getElementById("imagenAmpliada").src = src;
    document.getElementById("modal").style.display = "block";
}

function cerrarModal() {
    document.getElementById("modal").style.display = "none";
}

// 8. Validar formulario
function validarFormulario() {
    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    if (!nombre || !email.includes("@")) {
        alert("Por favor, ingresa un nombre y un email válido.");
        return false;
    }
    return true;
}
