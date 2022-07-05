const Login = require('../models/login');
const loginCtrl = {}

loginCtrl.createLogin = async (req, res) => {
    var login = new Login(req.body)
    try {
        await login.save();
        res.json({
            'status': '1',
            'msg': 'login creado'
        })

    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'login mal creado',
            'user':login.usuario,
            'pas':login.password,
            'emp':login.empleado
        })
    }
}
loginCtrl.iniciarLogin = async (req, res) => {
    const criteria = {
        usuario: req.body.usuario,
        password: req.body.password
    }
    Login.findOne(criteria, function (err, user){
        if (err) {
            res.json({
                'status': '0',
                'msg': 'error'
            })
        };
        if (!user) {
            res.json({
                'status': '0',
                'msg': 'usuario no encontrado'
            })
        } else {
            res.json({
                'status': '1',
                'msg': 'inicio correcto',
                usuario: user.usuario,
                _id: user.empleado

            })
        }
    })
}

module.exports = loginCtrl