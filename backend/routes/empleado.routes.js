const empleadoCtrl = require('./../controllers/empleado.controller');

const express = require('express');
const router = express.Router();

router.post('/crear',empleadoCtrl.createEmpledo);
router.get('/legajo/',empleadoCtrl.findLegajo);
router.get('/mostrar/',empleadoCtrl.mostrar);
router.delete('/borrar/:id', empleadoCtrl.deleteEmpleado);
router.put('/:_id/reunion/:idReunion', empleadoCtrl.addReunion);
router.get('/:id', empleadoCtrl.getEmpleado)


module.exports = router;