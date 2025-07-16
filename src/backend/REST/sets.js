const express = require('express');
const router = express.Router();
const db = require('../database/db');

router.get('/', (req, res) => {
  db.all('SELECT * FROM sets', (err, rows) => {
    if (err) return res.status(500).send(err.message);
    res.json(rows);
  });
});

router.post('/', (req, res) => {
  const { name, image, release } = req.body;
  const query = `
    INSERT INTO sets (name, image, release)
    VALUES (?, ?, ?)
  `;
  db.run(query, [name, image, release], function (err) {
    if (err) return res.status(500).send(err.message);
    res.json({ id: this.lastID });
  });
});

module.exports = router;
