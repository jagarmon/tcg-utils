const express = require('express');
const router = express.Router();
const db = require('../database/db');
const paginationUtils = require('../utils/pagination');

/*
{
  pageNum: number;
  pageSize: number;
  hasNext: boolean;
  hasPrevious: boolean;
  totalElements: number;
}
*/
router.get('/', (req, res) => {
  // const query = paginationUtils.getPaginatedQuery(
  //   req.query.pageNum?.toString(),
  //   req.query.pageSize?.toString()
  // );
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

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const idNum = Number(req.params.id);
  if (!Number.isInteger(idNum) || idNum <= 0) {
    return res.status(400).send('invalid ID');
  }
  const query = `
    DELETE FROM sets WHERE id=?
  `;
  db.run(query, [id], function (err) {
    if (err) return res.status(500).send(err.message);
    res.json({ id: this.lastID });
  });
});

module.exports = router;
