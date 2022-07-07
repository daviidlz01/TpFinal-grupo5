
const dependenciaCtrl = require('../controllers/dependencia.controller');
const express = require('express');
const router = express.Router();

router.post('/', dependenciaCtrl.createDependencia);
router.get('/',dependenciaCtrl.getDependencias);

module.exports = router;