const usuarioData = require("../data/usuarioData");

const obtenerUsuario = async (req, res) => {
    try {
        const {id} = req.params;
        res.json(await usuarioData.obtenerUsuario(id));    
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    obtenerUsuario
}