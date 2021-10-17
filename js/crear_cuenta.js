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
                    alert('Ese usuario o contraseña ya estan en uso');
                }
                else {
                    alert('Cuenta registrada con exito');
                }
            },
            error: () => {
                alert('Error')
            }
        });
    })
});