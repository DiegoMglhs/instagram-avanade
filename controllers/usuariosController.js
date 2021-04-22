const { response } = require('express');
const { Usuario, sequelize } = require('../models/');

const usuariosController = {
    index: async (request, response) => {
        const usuarios =  await Usuario.findAll();
        
        return response.render('usuarios', { listaUsuarios: usuarios });
    }, 
    registro: (request, response) => {
        return response.render('registro');
    },
    create: async (request, response) => {
        const {nome, email, senha} = request.body;

        const novoUsuario = await Usuario.create({
            nome,
            email,
            senha
        });

        return response.render('login');
    },
    update: async (request, response) => {
        const { id } = request.params;
        const { nome, email, senha } = request.body;

        const usuarioAtualizado = await Usuario.update({
            nome, 
            email, 
            senha
        }, {
            where: { id }
        })

        return response.send(usuarioAtualizado);
    },
    delete: async (request, response) => {
        const { id } = request.params;

        const usuarioDeconstado = await Usuario.destroy({
            where: {id}
        });

        return response.json(usuarioDeconstado);
        
    }
}

module.exports = usuariosController;