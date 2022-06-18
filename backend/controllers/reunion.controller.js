const Reunion = require('../models/reunion')
const reunionCtrl = {}

reunionCtrl.getReunion = async (req, res) => {
    var reuniones = await Reunion.find();
    res.json(reuniones);
}
reunionCtrl.createReunion = async (req, res) => {
    var reunion = new Reunion(req.body);
    try {
        await reunion.save();
        res.json({
            'status': '1',
            'msg': 'reunion guardado.'
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



module.exports = reunionCtrl