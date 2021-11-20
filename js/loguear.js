document.addEventListener('DOMContentLoaded', () => {
    const formulario = document.getElementById('form-loguear');

    formulario.addEventListener('submit', e => {
        e.preventDefault();
        const data = new FormData(formulario);
        $.ajax({
            type: 'post',
            processData: false,
            contentType: false,
            cache: false,
            url: './php/scripts/Login.php',
            data: data,
            success: (response) => {
                if(response == 'no') {
                    Swal.fire({
                        icon: 'error',
                        title: 'ERROR',
                        text: 'Correo o contraseña invalidos'
                    })
                }
                else {
                    localStorage.setItem("usuario", response);
                    location.href = './cuenta.html';
                }
            },
            error: () => {
                alert('Error')
            }
        });
    })
});