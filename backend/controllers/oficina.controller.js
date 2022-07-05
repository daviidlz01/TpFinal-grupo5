const Oficina = require('../models/oficina');
const oficinaCtrl = {}

oficinaCtrl.crearOficina = async(req,res)=>{
    var oficina = new Oficina(req.body)
    try{
        await oficina.save();
        res.json({
            'status':'1',
            'msg':'Oficina creado',
            _id: oficina._id

        })
    } catch(error){
        res.status(400).json({
            'status': '0',
            'msg': 'error al crear Oficina'
        })
    }
}
oficinaCtrl.mostrarOficinas = async (req,res)=>{
    var oficinas = await Oficina.find();
    res.json(oficinas)
}

module.exports = oficinaCtrl