const express = require('express');
const router = express.Router();
const db = require('../database/db');

router.get('/', (req, res) => {
  db.all('SELECT * FROM cards', (err, rows) => {
    if (err) return res.status(500).send(err.message);
    res.json(rows);
  });
});

router.post('/', (req, res) => {
  const { name, image, level, type, rarity } = req.body;
  const query = `
    INSERT INTO cards (name, image, level, type, rarity)
    VALUES (?, ?, ?, ?, ?)
  `;
  db.run(query, [name, image, level, type, rarity], function (err) {
    if (err) return res.status(500).send(err.message);
    res.json({ id: this.lastID });
  });
});

module.exports = router;
