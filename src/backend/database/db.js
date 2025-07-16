const fs = require('fs');
const path = require('path');
const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./mydb.sqlite', err => {
  if (err) console.error('Error connecting to SQLite:', err.message);
  else console.log('Connected to SQLite database.');
});

// Ejecutar script SQL de inicialización
const initSql = fs.readFileSync(path.join(__dirname, 'init.sql'), 'utf8');
db.exec(initSql, err => {
  if (err) console.error('Error executing init.sql:', err.message);
  else console.log('Database initialized.');
});

const seedSql = fs.readFileSync(path.join(__dirname, 'seed.sql'), 'utf8');
db.exec(initSql, err => {
  if (err) console.error('Error executing seed.sql:', err.message);
  else console.log('Database initialized.');
});

module.exports = db;
