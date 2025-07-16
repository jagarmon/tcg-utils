const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 4999;

const cardsRoutes = require('./REST/cards');

app.use(cors());
app.use(bodyParser.json());

// Rutas
app.use('/cards', cardsRoutes);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
