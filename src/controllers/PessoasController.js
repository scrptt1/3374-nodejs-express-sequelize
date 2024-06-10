const database = require('../models')

class PessoasController {
    static async pegaTodas(req, res) {
        try {
            const listaDePessoas = await database.Pessoa.findAll();
            return res.status(200).json(listaDePessoas)
        } catch (ex) {

        }
    }
}

module.exports = PessoasController;