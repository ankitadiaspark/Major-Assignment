nodemailer = require('nodemailer')

regMSG = "<h1>College Web</h1> <hr> <b>Your registeration is done; Please verify your email for this OTP : </b>"


function sendMail(otp,email,callback)
{
   console.log("SEND Mail : " + otp + email)
   nodemailer.createTestAccount((err, account) => 
   {   
     let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false, 
        proxy: 'http://172.16.1.7:3128',
        auth: {
            user: 'mitujjaintraining@gmail.com', // generated ethereal user
            pass: 'mitujjain' // generated ethereal password
        }
      });

    let mailOptions = {
        from: '"College" <mitujjaintraining@gmail.com>', // sender address
        to: email, // list of receivers
        subject: 'OTP Confirmation', // Subject line
        text: '', // plain text body
        html: regMSG+otp
    };

     // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
    	console.log("Mail EEEE : " + error)
    	console.log("Mail IIII : " + info)
        if (error) {
            callback(false)
        }else{
        	callback(true)
        }
      });
   });
}

module.exports = sendMail