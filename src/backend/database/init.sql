

DROP TABLE IF EXISTS rarities;

CREATE TABLE rarities (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT
);

DROP TABLE IF EXISTS types;

CREATE TABLE types (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT
);

DROP TABLE IF EXISTS cards;

CREATE TABLE cards (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    image TEXT,
    level INTEGER,
    type_id INTEGER,
    rarity_id INTEGER,
    FOREIGN KEY (type_id) REFERENCES types (id),
    FOREIGN KEY (rarity_id) REFERENCES rarities (id)
);
