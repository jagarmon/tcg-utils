const express = require('express');
const router = express.Router();
const db = require('../database/db');
const paginationUtils = require('../utils/pagination');

router.get('/', (req, res) => {
  const query = paginationUtils.getPaginatedQuery(
    req.query.pageNum?.toString(),
    req.query.pageSize?.toString()
  );
  db.all(query, (err, rows) => {
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
