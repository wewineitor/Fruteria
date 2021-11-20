document.addEventListener('DOMContentLoaded', () => {
    const contenido_carrito = document.getElementById('contenido-carrito');
    const total = document.getElementById("total");
    let total_pago = 0;

    const renderTable = (response) => {
        contenido_carrito.innerHTML = ''
        total_pago = 0;
        response.map(fila => (
            contenido_carrito.innerHTML += `
                <tr>
                    <td>${fila.nombre_fruta}</td>
                    <td>${fila.cantidad}</td>
                    <td>$${fila.precio}</td>
                    <td><button class = "btn-delete"><img src = "./images/icons/delete.png" alt = "delete" /></button></td>
                </tr>
            `,
            total_pago += parseInt(fila.precio)
        ));
        total.innerHTML = `Total $${total_pago}`
        localStorage.setItem("total", total_pago)

        const botones = document.getElementsByClassName('btn-delete');
        for(let i = 0; i < botones.length; i++) {
            botones[i].addEventListener('click', () => eliminar(localStorage.getItem("usuario"), response[i].nombre_fruta))
        }
    }

    const eliminar = (usuario, fruta) => {
        $.ajax({
            type: 'post',
            processData: false,
            cache: false,
            dataType: 'text',
            contentType: "application/json; charset=UTF-8",
            url: './php/scripts/eliminarFruta.php',
            data: JSON.stringify({usuario: usuario, fruta: fruta}),
            success: () => {
                Swal.fire({
                    icon: 'success',
                    text: 'Producto eliminado'
                })
                obtenerCarrito()
            },
            error: () => {
                Swal.fire({
                    icon: 'error',
                    text: 'Error con la conexion'
                })
            }
        })
    }

    const obtenerCarrito = () => {
        $.ajax({
            type: 'post',
            processData: false,
            cache: false,
            dataType: 'json',
            contentType: "application/json; charset=UTF-8",
            url: './php/scripts/obtenerCarrito.php',
            data: JSON.stringify({usuario: localStorage.getItem("usuario")}),
            success: (response) => {
                renderTable(response)
            },
            error: () => {
                Swal.fire({
                    icon: 'error',
                    text: 'Error con la conexion'
                })
            }
        })
    }

    obtenerCarrito()
});