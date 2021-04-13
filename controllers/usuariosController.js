const {Usuario, sequelize} = require('../models');

const usuariosController = {
    index: async (req, res) => {
        let usuarios = await Usuario.findAll();
        return res.json(usuarios);
    },
    create: async (req,res) => {
        let dadoUsuario = req.body;
        let novoUsuario = await Usuario.create({
            nome: dadoUsuario.nome,
            email: dadoUsuario.email,
            senha: dadoUsuario.senha
        })
        return res.json(novoUsuario);

    },
    update: async (req, res) => {
        const{upid} = req.params;
        let dadosAtualiza = req.body;
        let atualiza = await Usuario.update({
            nome: dadosAtualiza.nome,
            email: dadosAtualiza.email,
            senha: dadosAtualiza.senha
        }, {
            where: {
                id: upid
            }
        })
        return res.json(atualiza);
    },
    delete: async (req, res) => {
        const {delId} = req.params
        let deletar = await Usuario.destroy({
            where:{
                id: delId
            }
        })
        return res.json(deletar);
    }
}
module.exports = usuariosController;