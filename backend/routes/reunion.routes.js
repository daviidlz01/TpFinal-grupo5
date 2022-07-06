const reunionCtrl = require('./../controllers/reunion.controller');
const express = require ('express');
const router = express.Router();

router.get('/mostrar/',reunionCtrl.getReuniones);
router.post('/crear/',reunionCtrl.createReunion);
router.put('/editar/:id',reunionCtrl.editReunion);
router.delete('/borrar/:id', reunionCtrl.deleteReunion);
router.get('/buscar/:id',reunionCtrl.findEmpleado)




module.exports = router;