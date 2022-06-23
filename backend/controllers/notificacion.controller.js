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
notificacionCtrl.buscar = async (req,res)=> {
    try {
        const user = req.query.usuario 
        var fUser = await Notificacion.find({usuario:user})
        res.json(fUser)
    }catch (error) {
    console.log(error)
    res.status(400).json({
        status: '0',
        msg: "Error al obtener las mensajes "
    })
}
}


module.exports = notificacionCtrl