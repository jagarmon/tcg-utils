const fs = require('fs');
const path = require('path');
const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./tcg-utils-db.sqlite', err => {
  if (err) console.error('Error connecting to SQLite:', err.message);
  else console.log('Connected to SQLite database.');
});

db.serialize(() => {
  db.get(
    `SELECT name FROM sqlite_master WHERE type='table' AND name='rarities'`,
    (err, row) => {
      if (err)
        return console.error('Error checking table existence', err.message);

      if (!row) {
        createDatabase();
        seedDatabase();
      }
    }
  );
});

const createDatabase = () => {
  const initSql = fs.readFileSync(path.join(__dirname, 'init.sql'), 'utf8');
  db.exec(initSql, err => {
    if (err) console.error('Error executing init.sql:', err.message);
    else console.log('Database initialized.');
  });
};

const seedDatabase = () => {
  const seedSql = fs.readFileSync(path.join(__dirname, 'seed.sql'), 'utf8');
  db.exec(seedSql, err => {
    if (err) console.error('Error executing seed.sql:', err.message);
    else console.log('Database initialized.');
  });
};

module.exports = db;
