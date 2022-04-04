const { Router } = require('express');
const PessoaController = require('../controllers/PessoaController');

const router = Router();

router.get('/pessoas', PessoaController.getAll);
router.get('/pessoas/:id', PessoaController.get);
router.post('/pessoas', PessoaController.create);
router.put('/pessoas/:id', PessoaController.update);
router.delete('/pessoas/:id', PessoaController.delete);
router.get('/pessoas/:estudanteId/matriculas/:matriculaId', PessoaController.getMatricula);
module.exports = router;
