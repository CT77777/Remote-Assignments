CREATE DATABASE assignment;

CREATE TABLE user (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    `name` VARCHAR(255),
    email VARCHAR(255) NOT NULL,
    `password` VARCHAR(255) NOT NULL,
    created TIMESTAMP NOT NULL DEFAULT NOW()
);

INSERT INTO user (`name`, email, `password`)
VALUES 
("CT", "chanyihcheng@gmail.com", "qazwsx123");