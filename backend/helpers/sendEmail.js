const nodemailer = require("nodemailer");
const ejs = require('ejs');

const sendEmail = ({view, data, from, to, subject}) => {
    var transport = nodemailer.createTransport({
        host: "sandbox.smtp.mailtrap.io",
        port: 2525,
        auth: {
        user: "59b42ebaedef7a",
        pass: "fa517b0d6dc264"
        }
    });

    ejs.renderFile(`./views/${view}.ejs`,data, async (err , dataString ) => {
        const info = await transport.sendMail({
            from, // sender address
            to, // list of receivers
            subject, // Subject line
            html: dataString, // html body
            });
            console.log("Message sent: %s", info.messageId);
    })
}

module.exports = sendEmail;