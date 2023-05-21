const express = require('express');

const app = express();

// Ruta GET
app.get('/', (req, res) => {
  res.send('Respuesta a solicitud GET');
});

// Ruta POST
app.post('/', (req, res) => {
  res.send('Respuesta a solicitud POST');
});

// Ruta DELETE
app.delete('/', (req, res) => {
  res.send('Respuesta a solicitud DELETE');
});

// Ruta PUT
app.put('/', (req, res) => {
  res.send('Respuesta a solicitud PUT');
});

// Iniciar el servidor
app.listen(3000, () => {
  console.log('Servidor en ejecución en http://localhost:3000');
});
