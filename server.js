const express = require('express');
const app = express();

// Sirve archivos estáticos (HTML, JS)
app.use(express.static('public'));

app.listen(4000, '0.0.0.0', () => {
  console.log('Frontend escuchando en http://localhost:4000');
});
