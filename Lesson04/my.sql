
-- create
CREATE TABLE CLASSMATES (
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  name TEXT NOT NULL,
  age INTEGER NOT NULL,
  address TEXT NOT NULL
);

-- insert
INSERT INTO CLASSMATES (name, age, address) VALUES ('Ivan Ivanov', 26, 'Moscow');
INSERT INTO CLASSMATES (name, age, address) VALUES ('Anna Annova', 35, 'St.Petesburg');
INSERT INTO CLASSMATES (name, age, address) VALUES ('Serhey Sergeev', 33, 'Moscow');
INSERT INTO CLASSMATES (name, age, address) VALUES ('Stepan Stepanov', 24, 'Vladivostok');
INSERT INTO CLASSMATES (name, age, address) VALUES ('Ylia Ylieva', 35, 'Tomsk');
INSERT INTO CLASSMATES (name, age, address) VALUES ('Oksana Oksanova', 30, 'Moscow');
INSERT INTO CLASSMATES (name, age, address) VALUES ('Dmitry Dmytriev', 34, 'Ircutsk');
INSERT INTO CLASSMATES (name, age, address) VALUES ('Olga Olgova', 39, 'St.Petesburg');
INSERT INTO CLASSMATES (name, age, address) VALUES ('Sidor Sidorov', 25, 'Moscow');

-- fetch 
SELECT name FROM CLASSMATES WHERE address = 'Moscow' AND age >= 18 AND age < 30;
