document.addEventListener('DOMContentLoaded', () => {
    let menu_item = document.getElementById('menu-item');;
    localStorage.getItem('usuario') !== null ? menu_item.innerHTML = `<a href="cuenta.html">Cuenta</a>` : '<a href="inicio_sesion.html">Inicio de sesion/Registro</a>';
});