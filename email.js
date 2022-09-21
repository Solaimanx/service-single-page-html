const sgMail = require("@sendgrid/mail");
const apitoken = process.env.NEWAPI;

sgMail.setApiKey(apitoken);

const sendEmail = async (name, number, email, message) => {
  const msg = {
    to: "solaiman321@gmail.com",
    from: "khownotary@gmail.com",
    subject: `${name} - Message from knowhownotary.com`,
    html: `
    <h3>Contact Info => <br> </h3>

    <h4>name : ${name} </h4>
    <h4>number : ${number}</h4>
    <h4>email : ${email}</h4>
    <h4>Message : ${message}</h4>
    `,
  };

  await sgMail.send(msg, function (err, info) {
    if (err) {
      console.log(`Email Not Sent Error Occured => ${err}`);
      return "error";
    } else {
      console.log("email was send successfully");
      return "success";
    }
  });
};

module.exports = { sendEmail };
