const empleadoCtrl = require('./../controllers/empleado.controller');
const autCtrl = require('./../controllers/auth.controller');

const express = require('express');
const router = express.Router();

router.post('/crear/', autCtrl.verifyToken, empleadoCtrl.createEmpledo);
router.get('/legajo/', autCtrl.verifyToken, empleadoCtrl.findLegajo);
router.get('/participantes/', autCtrl.verifyToken, empleadoCtrl.findParticipante);
router.get('/mostrar/', autCtrl.verifyToken, empleadoCtrl.mostrar)



module.exports = router;