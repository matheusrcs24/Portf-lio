document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const form = event.target;
    const formData = new FormData(form);

    fetch(form.action, {
        method: form.method,
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            alert('Mensagem enviada com sucesso!');
            form.reset();
        } else {
            alert('Ocorreu um erro ao enviar a mensagem. Tente novamente.');
        }
    }).catch(error => {
        alert('Ocorreu um erro ao enviar a mensagem. Tente novamente.');
    });
});