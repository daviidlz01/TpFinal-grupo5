const recursoCtrl = require('./../controllers/recursos.controller');
const express = require ('express');
const { Router } = require('express');
const router = express.Router();
 
router.get('/mostar/',recursoCtrl.getRecursos);
router.post('/crear/',recursoCtrl.createRecurso);
router.put('/editar/:id',recursoCtrl.editRecurso);





module.exports = Router;