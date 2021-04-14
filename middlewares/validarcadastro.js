const { response } = require("express");
const { Usuario } = require('../models');

module.exports = async (request, response, next) => {
    let { email, senha, nome } = request.body;

    let user = await Usuario.findAll({ where: { email } })
    if (user.length) {
        response.status(400).json({ erro: "Email já cadastrado" })
        return
    } else {
        if (senha.length < 6 || senha.length > 12) {
            response.status(400).json({ erro: "Senha não deve ser menor que 6 caracteres ou maior que 12." })
            return
        } else {
            if (!nome || !email || !senha) {
                response.status(400).json({ erro: "Informe todos os dados" })
                return
            } else {
                next();
            }
        }
    }
}