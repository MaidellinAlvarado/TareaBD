
const mysql = require('mysql2');


const connection = mysql.createConnection({
    host: 'localhost',      
    user: 'userapp',        
    password: 'Port@l003', 
    database: 'BancoDB'      
});


connection.connect(err => {
    if (err) {
        console.error('Error al conectarse ala base de datos :', err.message);
        return;
    }
    console.log('Conexión exitosa a la base de datos BancoDB');
});


const consultas = [
    {
        descripcion: 'LISTADO DE CUENTAS CREADAS:',
        query: 'SELECT * FROM cuentas;'
    },
    {
        descripcion: 'lISTADO DE TODOS LOS CLIENTES:',
        query: 'SELECT * FROM clientes;'
    },
    {
        descripcion: 'lISTADO DE TODOS LOS CLIENTES ASOCIADOS ALAS CUENTAS:',
        query: `
            SELECT cuentas.id_cuenta, cuentas.tipo_cuenta, cuentas.saldo, clientes.nombre 
            FROM cuentas 
            INNER JOIN clientes ON cuentas.id_cliente = clientes.id_cliente;
        `
    },
    {
        descripcion: 'LISTADO DE CLIENTES QUE NO TIENEN CUENTAS ASOCIADAS:',
        query: `
            SELECT clientes.id_cliente, clientes.nombre, clientes.ciudad 
            FROM clientes 
            LEFT JOIN cuentas ON clientes.id_cliente = cuentas.id_cliente 
            WHERE cuentas.id_cuenta IS NULL;
        `
    }
];


consultas.forEach(({ descripcion, query }) => {
    connection.query(query, (err, results) => {
        if (err) {
            console.error('Error ejecutando consulta:', err.message);
            return;
        }
        console.log(descripcion);
        console.table(results);
    });
});


connection.end(err => {
    if (err) {
        console.error('Error cerrando la conexión:', err.message);
    } else {
        console.log('Conexión cerrada');
    }
});
