const Recurso = require('../models/recursos')
const recursoCtrl = {}

recursoCtrl.getRecursos = async (req, res) => {
    var resursos = await Recurso.find();
    res.json(resursos);
}
recursoCtrl.createRecurso = async (req, res) => {
    var recurso = new Recurso(req.body);
    try {
        await recurso.save();
        res.json({
            'status': '1',
            'msg': 'recurso guardado.'
        })
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'error al guardar la recurso'
        })
    }
}

recursoCtrl.editRecurso = async ( req,res) => {
    var recurso = new Recurso(req.body)
    try{
        var recursoId = req.params.id
        recurso._id = recursoId
        await Recurso.updateOne({_id: recursoId},recurso);
        res.json({
            'status': '1',
            'msg':'recurso actualizado'
        })
    } catch (error){
        res.status(400).json({
            'status': '0',
            'msg':'error al actualizar recurso'
        })
    }
}

recursoCtrl.deleteRecurso = async (req, res)=>{
    try{
        await Recurso.deleteOne({_id: req.params.id});
        res.json({
            status: '1',
            msg: 'Recurso Borrado'
        })
    }
    catch(error){
        res.status(400).json({
            'status': '0',
            'msg': 'Error Borrando Recurso'
        })
    }
}


module.exports = recursoCtrl