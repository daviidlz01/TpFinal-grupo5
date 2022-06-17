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
empleadoCtrl.findLegajo = async (req,res) =>{
    try {
        const leg = req.query.legajo 
        var fLegajo = await Empleado.find({legajo:leg})
        res.json(fLegajo)
    }catch (error) {
    console.log(error)
    res.status(400).json({
        status: '0',
        msg: "Error al obtener las Legajo"
    })
}
}
empleadoCtrl.findParticipante = async (req,res) =>{
    try {
        const par = req.query.participante 
        var fParticipante = await Empleado.find({legajo:par})
        res.json(fParticipante)
    }catch (error) {
    console.log(error)
    res.status(400).json({
        status: '0',
        msg: "Error al obtener las Participantes"
    })
}
}






module.exports = empleadoCtrl