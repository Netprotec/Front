function enviar() {
  const nombre = document.getElementById('nombre').value;

  fetch('http://154.38.163.221:3000/productos', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ nombre })
  })
  .then(res => res.json())
  .then(data => {
    document.getElementById('resultado').textContent =
      JSON.stringify(data, null, 2);
  })
  .catch(err => {
    document.getElementById('resultado').textContent =
      'Error: ' + err.message;
  });
}
