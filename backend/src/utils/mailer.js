import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "asgharshahzad720@gmail.com",
        pass: "lxjl hymy eoaq yjav"
    }
});

const mailOptions = {
    from: "asgharshahzad720@gmail.com",
    to: "ahmadbinasghar2022@gmail.com",
    subject: "Just a testing email using Node JS",
    text: "Allah apko sehat de bhai :)"
}

const sendMail = () => {
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
        } else {
            console.log(`Email sent: ${info.response}`);
        }
    })
}

export default sendMail;

