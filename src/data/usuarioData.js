const mysqlConnection = require("../database");

const obtenerUsuario = async (id) =>{
    return await mysqlConnection.query('select * from employees where id = ?',[id]);
}

module.exports = {
    obtenerUsuario
}