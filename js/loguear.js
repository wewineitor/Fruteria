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
                console.log(response)
            },
            error: () => {
                alert('Error')
            }
        });
    })
});