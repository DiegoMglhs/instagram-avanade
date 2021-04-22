const { request } = require('express');
const { Post } = require('../models/');

const postsController = {
    index: async (request, response) => {
        const posts = await Post.findAll({
            include: ['usuario', 'comentarios', 'curtiu']
        
        });

        return response.render('index', { listaPosts: posts });
    },
    show: async(request, response) => {
        const { usuarios_id } = request.params;

        const postsUsuario = await Post.findAll({
            where: {
                usuarios_id
            }
        });

        return response.json(postsUsuario);
    },
    create: async (request, response) => {
        const { texto, img, usuarios_id } = request.body;
        
        const novoPost = Post.create({
            texto, img, usuarios_id
        })

        return response.json(novoPost);
    },
    update: async (request, response) => {
        const { id } = request.params;
        const { texto, img, usuarios_id } = request.body;
        
        const postAtualizado = Post.update({
            texto, img, usuarios_id
        }, {
            where: {id}
        })

        return response.json(postAtualizado);
    },
    delete: async (request, response) => {
        const { id } = request.params;
        
        const postDeletado = Post.destroy({
            where: {id}
        })

        return response.json(postDeletado);
    }

    
}   

module.exports = postsController;