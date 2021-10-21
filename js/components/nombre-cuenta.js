document.addEventListener('DOMContentLoaded', () => {
    let cuenta_conectada = document.getElementById('cuenta-conectada');

    if(localStorage.getItem('usuario') !== undefined) {

        cuenta_conectada.innerHTML += `${localStorage.getItem('usuario')}`;
    }
});