const express = require ("express");
const nodemailer = require ("nodemailer");
const server = express.Router ();

server.post('/', (req, res) => {
    const email = req.body.email;
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'apphenry247@gmail.com',
            pass: 'henry$ft07'
        }
    });
    
    const mailOptions = {
        from: 'apphenry247@gmail.com',
        to: email,
        subject: `Verificacion de cuenta`,
        text: `mostrar mensaje aqui`
    }

    transporter.sendMail(mailOptions, (error, info) => {
        if(error) {
            res.status(500).send(error.message);
            console.log(error);
        } else {
            console.log('Email enviado.');
            res.status(200).json(req.body)
        }
    })
});

module.exports = server;