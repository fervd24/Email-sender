const nodemailer = require("nodemailer");

const contactEmail = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS
    },
});

contactEmail.verify((error) => {
    if(error) {
        console.log(error);
    } else {
        console.log("Ready to Send");
    }
});

const postMail = (req, res) => {
    const {name ,email, message} = req.body

    const mail = {
        from: name,
        to: process.env.GMAIL_USER,
        subject: `Message from ${name}`,
        html: `
        <h2>Name:</h2>
        <p>${name}</p>
        <h2>Email:</h2>
        <p>${email}</p>
        <h2>Message:</h2>
        <p>${message}</p>
        `
    };
    contactEmail.sendMail(mail, (err) => {
        if(err) {
            res.json({status: "Error"});
        } else {
            res.json({ status: "Message Sent"});
        }
    });
}

module.exports = postMail;

