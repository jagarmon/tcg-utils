const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 4999;

const cardsRoutes = require('./REST/cards');
const raritiesRoutes = require('./REST/rarities');
const setsRoutes = require('./REST/sets');

app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/cards', cardsRoutes);
app.use('/rarities', raritiesRoutes);
app.use('/sets', setsRoutes);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
