
CREATE DATABASE BancoDB;

USE BancoDB;


CREATE TABLE clientes (
    id_cliente INT PRIMARY KEY, 
    nombre VARCHAR(100),        
    ciudad VARCHAR(100)         
);

CREATE TABLE cuentas (
    id_cuenta INT PRIMARY KEY,
    id_cliente INT,
    saldo DECIMAL(10,2),
    FOREIGN KEY (id_cliente) REFERENCES clientes(id_cliente)
);



INSERT INTO clientes (id_cliente, nombre, ciudad) VALUES 
(1, 'Pedro', 'Guatemala'),
(2, 'Ana', 'Antigua'),
(3, 'Carlos', 'Escuintla'),
(4, 'Luisa', 'Quetzaltenango');




INSERT INTO cuentas (id_cuenta, id_cliente, tipo_cuenta, saldo) VALUES 
(1, 1, 'Monetaria', 1000),
(2, 3, 'Ahorros', 500);

DELETE FROM cuentas WHERE id_cliente = 4;

