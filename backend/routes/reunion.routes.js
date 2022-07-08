const reunionCtrl = require('./../controllers/reunion.controller');
const express = require ('express');
const router = express.Router();

router.get('/mostrar/',reunionCtrl.mostrar);
router.post('/crear/',reunionCtrl.createReunion);
router.put('/editar/:id',reunionCtrl.editReunion);
router.delete('/borrar/:id', reunionCtrl.deleteReunion);
router.get('/buscar/:id',reunionCtrl.findEmpleado)
router.put('/:id/estado/:estado', reunionCtrl.cambiarEstado);
router.get('/buscarFecha/',reunionCtrl.buscarFecha);
router.get('/buscarOficina/',reunionCtrl.buscaroficina)
router.get('/buscarEmpleado/',reunionCtrl.buscarEmpleado)



module.exports = router;