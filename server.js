const express = require('express');
const app = express();

// Sirve archivos estáticos (HTML, JS)
app.use(express.static('public'));

// SOLO escucha en localhost
app.listen(4000, '127.0.0.1', () => {
  console.log('Frontend LOCAL en http://localhost:4000');
});
