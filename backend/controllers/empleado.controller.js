const Empleado = require('../models/empleado');
const empleadoCtrl = {}

empleadoCtrl.createEmpledo = async (req,res) => {
    var empleado = new Empleado(req.body)
    try{
        await empleado.save();
        res.json({
            'status':'1',
            'msg':'Empleado creado'
        })
    } catch(error){
        res.status(400).json({
            'status': '0',
            'msg': 'error al crear Empledo'
        })
    }
}






module.exports = empleadoCtrl