function enviar() {
  const nombre = document.getElementById('nombre').value;

  fetch('/api/productos', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ nombre })
  })
    .then(res => {
      if (!res.ok) {
        throw new Error('Error HTTP ' + res.status);
      }
      return res.json();
    })
    .then(data => {
      document.getElementById('resultado').textContent =
        JSON.stringify(data, null, 2);
    })
    .catch(err => {
      document.getElementById('resultado').textContent =
        'Error: ' + err.message;
    });
}
