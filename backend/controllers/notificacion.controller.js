const notificacion = require('../models/notificacion');
const Notificacion = require('../models/notificacion');
const notificacionCtrl = {}

notificacionCtrl.creteNotificacion = async(req,res)=>{
    var notificacion = new Notificacion(req.body)
    try{
        await notificacion.save();
        res.json({
            'status':'1',
            'msg':'Notificaion creada'
        })

    } catch(error){
        res.status(400).json({
            'status': '0',
            'msg': 'error al crear Notificacion'
        })
    }
}
notificacionCtrl.getNotificacion = async (req,res)=>{
    var notificaciones = await Notificacion.find();
    res.json(notificaciones);
}


module.exports = notificacionCtrl