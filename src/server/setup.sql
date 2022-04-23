-- DATABASE

CREATE DATABASE evergore;
ADD USER 'evertool'.'localhost' IDENTIFIED BY 'h9-gE3rhW+9s5Rf7-Gta84wSe2+gE';
GRANT ALL PRIVILEGES ON evergore.* TO 'evertool'.'localhost';
USE evergore;

-- TABLES

CREATE TABLE const (
  name VARCHAR(32) PRIMARY KEY,
  value VARCHAR(500)
);

CREATE TABLE ability (
  id INT PRIMARY KEY,
  type ENUM('Fertigkeit', 'Handwerk'),
  name VARCHAR(32) NOT NULL,
  f_race varchar(64),
  f_race6 varchar(64),
  f_class6 varchar(128)
);

CREATE TABLE item_category (
  id INT PRIMARY KEY,
  name VARCHAR(64) NOT NULL,
  category_ammo INT,
  main_Attribute ENUM('str', 'dex', 'con', 'int')
);

CREATE TABLE item_blueprint (
  id VARCHAR(32) PRIMARY KEY,
  category INT NOT NULL,
  value INT,
  weight INT,
  is_market INT,
  is_stackable INT,
  ability_use INT,
  ability_level_use INT,
  handycap INT,
  
  ability_craft INT,
  ability_level_craft INT,
  building_craft INT,
  craft_time TIME,
  
  armor float(1,4),
  absorb float(4,1),
  block float(1,4),
  shield_effect INT,
  shield_experience INT,
  
  heal_min INT,
  heal_max INT,
  heal_min_p FLOAT(4,1),
  heal_max_p FLOAT(4,1),
  
  damage_min INT,
  damage_max INT,
  effect_damage float(1,4),
  effect_heal float(1,4),
  effect_effect float(1,4),
  speed INT, -- 0 Sehr langsam, 4 Sehr schnell
  chance_to_hit INT, -- 0 Sehr niedrig, 4 sehr Hoch
  dual_effectivity INT,
  
  critical_chance INT,
  critical_potential INT,
  critical_effect INT,
  
  choice_chance INT,
  choice_potential INT,
  choice_binding INT,

  parry_chance INT,
  parry_potential INT,
  parry_chance_reduction INT,
  avade_chance_reduction INT,
  
  handycap_tollerance_primary INT,
  handycap_tollerance_secondary INT,
  handycap_tollerance_damage INT,
  handycap_tollerance_heal INT,
  handycap_tollerance_effect INT,
  
  switch_seconds INT,
  effect_seconds INT
);

CREATE TABLE item_ingredient (
  id VARCHAR(32) NOT NULL,
  id_in VARCHAR(32) NOT NULL,
  amount INT NOT NULL DEFAULT 1,
  PRIMARY KEY (id, id_in)
);

CREATE TABLE race (
  id INT PRIMARY KEY,
  name VARCHAR(32),
  strength INT,
  dexterity INT,
  constitution INT,
  intelligence INT
);

CREATE TABLE class (
  id INT PRIMARY KEY,
  name VARCHAR(32),
  base ENUM('Kampf', 'Magie', 'List'),
  strength INT,
  dexterity INT,
  constitution INT,
  intelligence INT
);

CREATE TABLE DATA_CHAR (
  race INT,
  class INT,
  level INT,
  strength INT,
  dexterity INT,
  constitution INT,
  intelligence INT,
  weight_max INT,
  weight_sum INT,
  evade FLOAT(1,4),
  block FLOAT(1,4),
  block_equip FLOAT(1,4),
  parry FLOAT(1,4),
  parry_equip FLOAT(1,4),
  handicap_melee FLOAT(1,4),
  handicap_ranged FLOAT(1,4),
  handicap_melee_equip FLOAT(1,4),
  handicap ranged_equip FLOAT(1,4),
  absorb FLOAT(4,1),
  absorb_equip FLOAT(4,1),
  json VARCHAR(10000)
);

CREATE TABLE building (
  id INT PRIMARY KEY,
  section INT,
  name VARCHAR(32)
);

CREATE TABLE building_stage (
  id INT,
  stage INT,
  cost_day INT,
  work_space INT,
  needs SET('previous', 'city'),
  ingredient1 INT,
  ingredient1_amount INT,
  ingredient2 INT,
  ingredient2_amount INT,
  ingredient3 INT,
  ingredient3_amount INT,
  ingredient4 INT,
  ingredient4_amount INT,
  PRIMARY KEY (id, stage)
);

-- FOREIGN KEYS


-- DATA

INSERT INTO const VALUES
('cost_guild', 150000),
('cost_town', 200000),
('city_buildings', 15),
('city_members', 40);

INSERT INTO ability (id, type, name) VALUES
(1, 'Fertigkeit', 'Schwerter'),
(2, 'Fertigkeit', 'Dolche'),
(3, 'Fertigkeit', 'Äxte'),
(4, 'Fertigkeit', 'Keulen'),
(5, 'Fertigkeit', 'Stangenwaffen'),
(6, 'Fertigkeit', 'Bögen'),
(7, 'Fertigkeit', 'Armbrüste'),
(8, 'Fertigkeit', 'Stoffrüstungen'),
(9, 'Fertigkeit', 'Lederrüstungen'),
(10, 'Fertigkeit', 'Metallrüstungen'),
(11, 'Fertigkeit', 'Feuermagie'),
(12, 'Fertigkeit', 'Wassermagie'),
(13, 'Fertigkeit', 'Erdmagie'),
(14, 'Fertigkeit', 'Luftmagie'),
(15, 'Fertigkeit', 'Bandagieren'),
(16, 'Fertigkeit', 'Diebstahl'),
(17, 'Fertigkeit', 'Sabotage'),
(18, 'Fertigkeit', 'Schattenkunde'),
(19, 'Fertigkeit', 'Spurenlesen'),
(20, 'Fertigkeit', 'Erkunden'),
(21, 'Fertigkeit', 'Feilschen'),
(22, 'Handwerk', 'Holzverarbeitung'),
(23, 'Handwerk', 'Steinverarbeitung'),
(24, 'Handwerk', 'Erzverarbeitung'),
(25, 'Handwerk', 'Stoff- & Lederverarbeitung'),
(26, 'Handwerk', 'Konstruktion'),
(27, 'Handwerk', 'Schmieden (Schwerter)'),
(28, 'Handwerk', 'Schmieden (Dolche)'),
(29, 'Handwerk', 'Schmieden (Äxte)'),
(30, 'Handwerk', 'Schmieden (Keulen)'),
(31, 'Handwerk', 'Schmieden (Stangenwaffen)'),
(32, 'Handwerk', 'Sattlern (Lederrüstungen)'),
(33, 'Handwerk', 'Schmieden (Metallrüstungen)'),
(34, 'Handwerk', 'Schmieden (Magiestäbe)'),
(35, 'Handwerk', 'Bognern (Bögen)'),
(36, 'Handwerk', 'Bognern (Armbrüste)'),
(37, 'Handwerk', 'Schneidern (Stoffrüstungen)'),
(38, 'Handwerk', 'Alchemie'),
(39, 'Handwerk', 'Wachdienst');

INSERT INTO race(id, name) VALUES
(1, 'Mensch'),
(2, 'Elf'),
(3, 'Halbelf'),
(4, 'Zwerg'),
(5, 'Gnom');

INSERT INTO class(id, name, base) VALUES
(1, 'Babar*in', 'Kampf'),
(2, 'Söldner*in', 'Kampf'),
(3, 'Ritter*in', 'Kampf'),
(4, 'Gardist*in', 'Kampf'),
(5, 'Bestienjäger*in', 'Kampf'),
(6, 'Magier*in', 'Magie'),
(7, 'Kleriker*in', 'Magie'),
(8, 'Hexe', 'Magie'),
(9, 'Alchemist*in', 'Magie'),
(10, 'Antiquar*in', 'Magie'),
(11, 'Waldläufer*in', 'List'),
(12, 'Druid*in', 'List'),
(13, 'Dieb*in', 'List'),
(14, 'Streuner*in', 'List'),
(15, 'Assassin*in', 'List');
