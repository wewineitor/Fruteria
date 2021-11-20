document.addEventListener('DOMContentLoaded', () => {
    const boton = document.getElementById("comprar");

    boton.addEventListener('click', () => {
        $.ajax({
            type: 'post',
            processData: false,
            cache: false,
            dataType: 'text',
            contentType: "application/json; charset=UTF-8",
            url: './php/scripts/comprar.php',
            data: JSON.stringify({usuario: localStorage.getItem("usuario")}),
            success: () => {
                Swal.fire({
                    icon: 'success',
                    text: 'Compra realizada'
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
    });
});