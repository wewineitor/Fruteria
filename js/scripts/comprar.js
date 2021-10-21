document.addEventListener('DOMContentLoaded', () => {
    const boton = document.getElementById("comprar");
    boton.addEventListener('click', () => {
        console.log(localStorage.getItem("total"))
    });
});