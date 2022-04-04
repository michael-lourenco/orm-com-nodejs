const { Router } = require('express');
const NivelController = require('../controllers/NivelController');

const router = Router();

router.get('/niveis', NivelController.getAll);
router.get('/niveis/:id', NivelController.get);
router.post('/niveis', NivelController.create);
router.put('/niveis/:id', NivelController.update);
router.delete('/niveis/:id', NivelController.delete);

module.exports = router;
