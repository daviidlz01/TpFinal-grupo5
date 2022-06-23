const notificacionCtrl = require('./../controllers/notificacion.controller');

const express = require('express');
const router = express.Router();

router.post('/crear/',notificacionCtrl.creteNotificacion);
router.get('/mostrar/',notificacionCtrl.getNotificacion);
router.get('/buscar/', notificacionCtrl.buscar);

module.exports = router;