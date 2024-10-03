const nodemailer = require("nodemailer");
const ejs = require('ejs');

const sendEmail = async ({view, data, from, to, subject}) => {
    try {
        var transport = nodemailer.createTransport({
            host: "sandbox.smtp.mailtrap.io",
            port: 2525,
            auth: {
            user: "59b42ebaedef7a",
            pass: "fa517b0d6dc264"
            }
        });
    
        let dataString = await ejs.renderFile(`./views/${view}.ejs`,data);
        const info = await transport.sendMail({
            from, // sender address
            to, // list of receivers
            subject, // Subject line
            html: dataString, // html body
        });
        console.log("Message sent: %s", info.messageId);
    } catch (e) {
        throw new Error(e);
    }

}

module.exports = sendEmail;