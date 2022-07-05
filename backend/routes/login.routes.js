const loginCtrl =require('./../controllers/login.controller');

const express = require('express');
const router =express.Router();

router.post('/crear',loginCtrl.createLogin);
router.post('/login',loginCtrl.iniciarLogin);
router.delete('/borrar/:id', loginCtrl.deleteLogin);


module.exports = router;