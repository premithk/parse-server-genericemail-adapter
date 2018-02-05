var nodemailer = require('nodemailer');

module.exports = function (options) {

    var transporter = nodemailer.createTransport({
        service: options.service,
        auth: {
            user: options.email, // Your email id
            pass: options.password // Your password }
        }
    });

    var sendMail = function (mail) {

        return new Promise(function (resolve, reject) {

            var mailOptions = {
                from: options.from, // sender address
                to: [mail.to], // list of receivers
                subject: mail.subject, // Subject line
                text: mail.text, //, // plaintext body
                html:mail.html,
                attachments:mail.attachments
            };

            transporter.sendMail(mailOptions, function (error, info) {
                if (error) {
                    console.log(error);
                    reject(error);
                } else {
                    console.log('Message sent: ' + info.response);
                    resolve(info);
                };
            });


        });
    };


    return {
        sendMail: sendMail
    }
};

