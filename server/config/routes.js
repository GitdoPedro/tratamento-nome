const express = require('express');
const nameController = require('../controllers/nameController');

const router = express.Router();

router.post('/', nameController.create);
router.get('/:id',nameController.findById)
router.get('/', nameController.listAll);
router.put('/:id', nameController.update);
router.delete('/:id', nameController.delete);

module.exports = router;