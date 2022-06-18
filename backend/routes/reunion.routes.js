const reunionCtrl = require('./../controllers/reunion.controller');
const express = require ('express');
const { Router } = require('express');
const router = express.Router();

router.get('/mostrar/',reunionCtrl.getReunion);
router.post('/crear/',reunionCtrl.createReunion);
router.put('/editar/:id',reunionCtrl.editReunion);





module.exports = Router;