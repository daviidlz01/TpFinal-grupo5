const recursoCtrl = require('./../controllers/recursos.controlles');

const express = require('express');
const router = express.Router();
 
router.get('/mostrar/',recursoCtrl.getRecursos);
router.post('/crear/',recursoCtrl.createRecurso);
router.put('/editar/:id',recursoCtrl.editRecurso);





module.exports = router;