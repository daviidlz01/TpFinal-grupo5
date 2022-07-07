
const nodeMailer = require('nodemailer');
const Email = require('../models/email')
const emailCtrl = {}

emailCtrl.sendEmail = async (req, res) =>{
    var Datos = new Email(req.body)

    let transporter = nodeMailer.createTransport({
        host:'smtp.ethereal.email',
        port:587,
        secure: false,
        auth:{
            user:'dzkaehe2cbv3pbgj@ethereal.email',
            pass:'Gm3qf2hM1vnAqSTypA'
        }
    })
    
     const mailOptions = {
        from: '"Reuniones" <dzkaehe2cbv3pbgj@ethereal.email>',
        to:Datos.email,
        subject:Datos.asunto,
        text:Datos.mensaje
    };

    transporter.sendMail(mailOptions,function(error,result){
        if (error) return resp.json({ok:false,msg:error })
        return res.json({
            'status':'1',
            'msg':'Notificaion creada'
        })
    })
}

module.exports = emailCtrl;







