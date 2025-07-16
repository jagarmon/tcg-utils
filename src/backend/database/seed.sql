INSERT INTO cards (name, image, level, type_id, rarity_id, set_id) VALUES
  ('Caballero Dragón', 'https://example.com/images/dragon-knight.png', 5, 1, 2, 1),
  ('Bola de Fuego', 'https://example.com/images/fireball.png', 2, 2, 2, 2),
  ('Arquera Elfa', 'https://example.com/images/elf-archer.png', 3, 2, 1, 2),
  ('Muro de Piedra', 'https://example.com/images/stone-wall.png', 1, 1, 1, 1);

INSERT INTO rarities (name) VALUES
  ('Common'),
  ('Rare'),
  ('SR'),
  ('UR'),
  ('Ultimate'),
  ('Collector'),
  ('Secret'),
  ('Starlight'),
  ('QCR'),
  ('Ghost'),
  ('Gold');

INSERT INTO types (name) VALUES
    ('Aqua'),
    ('Beast'),
    ('Beast-Warrior'),
    ('Creator God'),
    ('Cyberse'),
    ('Dinosaur'),
    ('Divine-Beast'),
    ('Dragon'),
    ('Fairy'),
    ('Fiend'),
    ('Fish'),
    ('Insect'),
    ('Illusion'),
    ('Machine'),
    ('Plant'),
    ('Reptile'),
    ('Rock'),
    ('Sea Serpent'),
    ('Spellcaster'),
    ('Thunder'),
    ('Warrior'),
    ('Winged Beast'),
    ('Wyrm'),
    ('Zombie');

INSERT INTO sets (name, image, release) VALUES
  ('Age of Overlord', 'https://example.com/images/dragon-knight.png', '15/02/1998');
 