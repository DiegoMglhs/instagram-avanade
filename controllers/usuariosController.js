const {Usuario, sequelize} = require('../models');

const usuariosController = {
    index: async (req, res) => {
        let usuarios = await Usuario.findAll();
        return res.json(usuarios);
    },
    create: async (req,res) => {
        let{nome, email, senha} = req.body;
        let novoUsuario = await Usuario.create({
            nome,
            email,
            senha
        })
        return res.json(novoUsuario);

    },
    update: async (req, res) => {
        const{upid} = req.params;
        let {nome, email, senha} = req.body
        let dadosAtualiza = req.body;
        let atualiza = await Usuario.update({
            nome,
            email,
            senha
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