document.addEventListener('DOMContentLoaded', () => {
    const cerrar = document.getElementById('cerrar-sesion');

    cerrar.addEventListener('click', () => {
        localStorage.clear();
        location.href = './inicio_sesion.html';
    })
});