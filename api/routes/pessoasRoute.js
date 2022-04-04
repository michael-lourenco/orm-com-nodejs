const { Router } = require('express');
const PessoaController = require('../controllers/PessoaController');

const router = Router();

router.get('/pessoas', PessoaController.getAll);
router.get('/pessoas/:id', PessoaController.get);
router.post('/pessoas', PessoaController.create);
router.put('/pessoas/:id', PessoaController.update);
router.delete('/pessoas/:id', PessoaController.delete);
router.get('/pessoas/:estudanteId/matriculas/:matriculaId', PessoaController.getMatricula);
router.post('/pessoas/:estudanteId/matriculas', PessoaController.createMatricula);
router.put('/pessoas/:estudanteId/matriculas/:matriculaId', PessoaController.updateMatricula);
router.delete('/pessoas/:estudanteId/matriculas/:matriculaId', PessoaController.deleteMatricula);
module.exports = router;
