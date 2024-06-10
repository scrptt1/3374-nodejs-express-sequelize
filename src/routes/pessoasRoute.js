const {Router} = require('express');
const PessoasController = require('../controllers/PessoasController.js');

const router = Router();

router.get('/pessoas', PessoasController.pegaTodas)

module.exports = router;