require("dotenv").config();
const nodemailer = require("nodemailer");
const inquirer = require("inquirer");

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD
    }
});

inquirer.prompt([
    {
        name: "emailAddress",
        type: "input",
        message: "Enter the email address to send to:"
    }
]).then(answers => {
    console.log(answers);
    const mailOptions = {
        from: process.env.EMAIL_USER, // sender address
        to: answers.emailAddress, // list of receivers
        subject: 'Test Email from Node', // Subject line
        html: '<p>This email came from Node using Nodemailer</p>'// plain text body
    };

    transporter.sendMail(mailOptions, function (err, info) {
        if (err)
            console.log(err)
        else
            console.log(info);
    });
});

