document.addEventListener('DOMContentLoaded', () => {
    const frutas = [
        {
            nombre: 'manzana',
            precio: 5.00
        },
        {
            nombre: 'durazno',
            precio: 10.00
        },
        {
            nombre: 'melon',
            precio: 12.00
        },
        {
            nombre: 'naranja',
            precio: 7.00
        },
        {
            nombre: 'piña',
            precio: 20.00
        },
        {
            nombre: 'platano',
            precio: 9.00
        },
        {
            nombre: 'sandia',
            precio: 18.00
        },
        {
            nombre: 'uva',
            precio: 15.00
        },
    ];

    const container = document.getElementById('container-frutas');

    const agregarCarrito = data => {
        if(localStorage.getItem("usuario") == null) {
            alert("Debe conectarse para poder realizar esta accion");
        }
        else {
            const json = {
                usuario: localStorage.getItem("usuario"),
                fruta: data.nombre,
                precio: data.precio
            }

            $.ajax({
                type: 'post',
                processData: false,
                cache: false,
                dataType: 'text',
                contentType: "application/json; charset=UTF-8",
                url: './php/scripts/agregarCarrito.php',
                data: JSON.stringify(json),
                success: () => {
                    alert("Producto agregado al carrito");
                },
                error: (jqXHR, exception) => {
                    alert('Error en la conexion: ', exception);
                }
            })
        }
    }

    frutas.map(fruta => (
        container.innerHTML += `
            <div class="card">
                <h3>${fruta.nombre.toUpperCase()}</h3>
                <img src="./images/${fruta.nombre}.png" alt="" width="150" height="100">
                <p>${fruta.precio}$</p>
                <button class="add-car" >Agregar al carrito</button>
            </div>
        `
    ));
    const botones = document.getElementsByClassName('add-car');
    for(let i = 0; i < botones.length; i++) {
        botones[i].addEventListener('click', () => agregarCarrito(frutas[i]))
    }
});