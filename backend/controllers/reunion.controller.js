const Reunion = require('../models/reunion')
const reunionCtrl = {}

reunionCtrl.mostrar = async (req, res) => {
    var reuniones = await Reunion.find().populate('oficina');
    res.json(reuniones);
}


reunionCtrl.createReunion = async (req, res) => {
    var reunion = new Reunion(req.body);
    try {
        await reunion.save();
        res.json({
            'status':'1',
            'msg':'Empleado creado',
            _id: reunion._id

        })
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'error al guardar la reunion'
        })
    }
}

reunionCtrl.editReunion = async ( req,res) => {
    var reunion = new Reunion(req.body)
    try{
        var reunionId = req.params.id
        reunion._id = reunionId
        await Reunion.updateOne({_id: reunionId},reunion);
        res.json({
            'status': '1',
            'msg':'reunion actualizado'
        })
    } catch (error){
        res.status(400).json({
            'status': '0',
            'msg':'error al actualizar reunion'
        })
    }
}

reunionCtrl.deleteReunion = async (req, res)=>{
    try{
        await Reunion.deleteOne({_id: req.params.id});
        res.json({
            status: '1',
            msg: 'Reunion Borrada'
        })
    }
    catch(error){
        res.status(400).json({
            'status': '0',
            'msg': 'Error Borrando Reunion'
        })
    }
}
reunionCtrl.findEmpleado = async (req,res)=> {
    try{
        
        var empleado = await Reunion.find({participantes: [req.params._id]})
        res.json(Reunion)
    }
    catch(error){
        res.status(400).json({
            'status': '0',
            'msg': 'Error Borrando buscando empleado'
        })
    }
}
module.exports = reunionCtrl