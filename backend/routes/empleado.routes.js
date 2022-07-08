const empleadoCtrl = require('./../controllers/empleado.controller');
const autCtrl = require('./../controllers/auth.controller');

const express = require('express');
const router = express.Router();

router.post('/crear', autCtrl.verifyToken, empleadoCtrl.createEmpledo);
router.get('/legajo/', autCtrl.verifyToken, empleadoCtrl.findLegajo);
router.get('/mostrar/', autCtrl.verifyToken, empleadoCtrl.mostrar);
router.delete('/borrar/:id',  autCtrl.verifyToken, empleadoCtrl.deleteEmpleado);
router.put('/:_id/reunion/:idReunion',  autCtrl.verifyToken, empleadoCtrl.addReunion);
router.get('/:id',  autCtrl.verifyToken, empleadoCtrl.getEmpleado)


module.exports = router;