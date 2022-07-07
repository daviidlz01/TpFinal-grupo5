const oficinaCtrl = require ('./../controllers/oficina.controller');
const express = require('express');
const router = express.Router();

router.post('/crear/',oficinaCtrl.crearOficina);
router.get('/mostrar/',oficinaCtrl.mostrarOficinas);

module.exports = router;