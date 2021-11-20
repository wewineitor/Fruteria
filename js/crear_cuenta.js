document.addEventListener('DOMContentLoaded', () => {
    const formulario = document.getElementById('form-registro');

    formulario.addEventListener('submit', e => {
        e.preventDefault();
        const data = new FormData(formulario);
        $.ajax({
            type: 'post',
            processData: false,
            contentType: false,
            cache: false,
            url: './php/scripts/Registro.php',
            data: data,
            success: (response) => {
                if(response == "no") {
                    Swal.fire({
                        icon: 'error',
                        title: 'ERROR',
                        text: 'Ese usuario o correo ya estan en uso'
                    })
                }
                else {
                    Swal.fire({
                        icon: 'success',
                        text: 'Cuenta registrada con exito'
                    })
                }
            },
            error: () => {
                alert('Error')
                Swal.fire({
                    icon: 'error',
                    text: 'Error en la conexion'
                })
            }
        });
    })
});