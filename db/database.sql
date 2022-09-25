CREATE DATABASE IF NOT EXISTS companydb;

USE companydb;

CREATE TABLE employee (
    id INT(11) NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(45) DEFAULT NULL,
    salario int(5) DEFAULT NULL,
    PRIMARY KEY(id)
);


DESCRIBE employee;