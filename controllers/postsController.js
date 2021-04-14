const {Post, sequelize} = require('../models');

const potsController = {
    index: async (req, res) => {
        let posts = await Post.findAll();
        return res.json(posts);
    },
    create: async (req,res) => {
        let dadosPost = req.body;
        let novoPost = await Post.create({
            texto: dadosPost.texto,
            img: null,
            usuarios_id: dadosPost.usuarios_id,
            n_likes: dadosPost.n_likes
        })
        return res.json(novoPost);

    },
    update: async (req, res) => {
        const{upid} = req.params;
        let dadosAtualiza = req.body;
        let atualiza = await Post.update({
            texto: dadosAtualiza.texto,
            usuarios_id: dadosAtualiza.usuarios_id,
            n_likes: dadosAtualiza.n_likes
        }, {
            where: {
                id: upid
            }
        })
        return res.json(atualiza);
    },
    delete: async (req, res) => {
        const {delId} = req.params
        let deletar = await Post.destroy({
            where:{
                id: delId
            }
        })
        return res.json(deletar);
    },
    show: async(req,res) =>{
        const {id} = req.params;
        let mostrartudo = await Post.findAll({
            where: {
                usuarios_id: id
            }
        })
        return res.json(mostrartudo)
    }
}
module.exports = potsController;