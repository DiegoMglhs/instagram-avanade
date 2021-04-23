const { response } = require('express');
const  {Usuario} = require('../models');

module.exports = async (req, res, next) => {
    const {nome, email, senha} = req.body;
    const usuario = await Usuario.findAll({
        where: {email}
    });

    if (!(nome && email && senha)) {
        res.status(400).json({
            erro: "Campo não preenchido"
        });
    } else if (usuario.length) {
        res.status(400).json({
            erro: "Email já cadastrado"
        });
    } else if (senha.length < 6 || senha.length > 12) {
        res.status(400).json({
            erro: "A senha deve ter entre 6 e 12 caracteres"
        });
    }
    else {
        next();
    }
}