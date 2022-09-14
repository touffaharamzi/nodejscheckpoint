var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'Rath666Art@gmail.com',
    pass: 'kRuejVYFX9KB'
  }
});

var mailOptions = {
  from: 'Rath666Art@gmail.com',
  to: 'jame.braun@aladeen.org',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};
 
transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
}); 