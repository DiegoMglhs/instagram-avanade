const usersController = {
    index: (req, res) => {
        return res.send('Estou exibindo essa mensagem através do controller')
    }
}

module.exports = usersController;