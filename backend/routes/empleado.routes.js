const empleadoCtrl = require('./../controllers/empleado.controller');

const express = require('express');
const router = express.Router();

router.post('/crear/',empleadoCtrl.createEmpledo);
router.get('/legajo/',empleadoCtrl.findLegajo);
router.get('/participantes/',empleadoCtrl.findParticipante);





module.exports = router;