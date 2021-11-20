document.addEventListener('DOMContentLoaded', () => {
    const boton = document.getElementById("comprar");

    boton.addEventListener('click', () => {
        if(localStorage.getItem("usuario") == null) {
            Swal.fire({
                icon: 'error',
                title: 'ERROR',
                text: 'Debe conectarse para poder realizar esta accion'
            })
        }
        else {
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
                        text: 'Compra realizada',
                        confirmButtonText: 'Aceptar'
                    }).then(result => {
                        if(result.isConfirmed) location.reload()
                    })
                    
                },
                error: () => {
                    Swal.fire({
                        icon: 'error',
                        text: 'Error con la conexion'
                    })
                }
            })
        }
    });
});