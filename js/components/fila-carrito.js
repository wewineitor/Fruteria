document.addEventListener('DOMContentLoaded', () => {
    const contenido_carrito = document.getElementById('contenido-carrito');
    const total = document.getElementById("total");
    let total_pago = 0;

    $.ajax({
        type: 'post',
        processData: false,
        cache: false,
        dataType: 'json',
        contentType: "application/json; charset=UTF-8",
        url: './php/scripts/obtenerCarrito.php',
        data: JSON.stringify({usuario: localStorage.getItem("usuario")}),
        success: (response) => {
            response.map(fila => (
                contenido_carrito.innerHTML += `
                    <tr>
                        <td>${fila.nombre_fruta}</td>
                        <td>${fila.cantidad}</td>
                        <td>${fila.precio}</td>
                    </tr>
                `,
                total_pago += parseInt(fila.precio)
            ));
            total.innerHTML = `Total ${total_pago}`
            localStorage.setItem("total", total_pago)
        },
        error: () => {
            alert('Error en la conexion');
        }
    })
});