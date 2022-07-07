const Empleado = require('../models/empleado');
const Reunion = require('../models/reunion');
const empleadoCtrl = {}

empleadoCtrl.createEmpledo = async (req,res) => {
    var empleado = new Empleado(req.body)
    try{
        await empleado.save();
        res.json({
            'status':'1',
            'msg':'Empleado creado',
            _id: empleado._id

        })
    } catch(error){
        res.status(400).json({
            'status': '0',
            'msg': 'error al crear Empledo'
        })
    }
}
empleadoCtrl.getEmpleado = async (req, res) => {
    const empleado = await Empleado.findById(req.params.id).populate('reuniones')
    res.json(empleado);
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

empleadoCtrl.deleteEmpleado= async (req, res)=>{
    try{
        await Empleado.deleteOne({_id: req.params.id});
        
        res.json({
            status: '1',
            msg: 'Empleado Borrado'
        })
    }
    catch(error){
        res.status(400).json({
            'status': '0',
            'msg': 'Error Borrando Empleado'
        })
    }
}
empleadoCtrl.mostrar = async (req,res)=>{
    var empleados = await Empleado.find();
    res.json(empleados);
}

empleadoCtrl.addReunion = async (req, res)=>{
    
    const idReunion = req.params.idReunion;
    const idEmpleado = req.params._id;

    var reunion = await Reunion.findById(idReunion);
    var empleado = await Empleado.findById(idEmpleado);

    try{
        empleado.reuniones.push(reunion);
        empleado.save();
        res.status(200).json({
            status : 1,
            msg: "Reunion Agregada"
        })
    }
    catch{
        res.status(400).json({
            status: 0,
            msg: "Error al agregar Reunion"
        })
    }
}





module.exports = empleadoCtrl