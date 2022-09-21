const sgMail = require("@sendgrid/mail");
const apitoken = process.env.API;


sgMail.setApiKey(apitoken);

const sendEmail = async (name, message) => {
  const msg = {
    to: "small.talk.confidence@gmail.com",
    from: "small.talk.confidence@gmail.com",
    subject: `${name} - Small Talk sentences`,
    text: message,
  };

  await sgMail.send(msg, function (err, info) {
    if (err) {
      console.log(`Email Not Sent Error Occured => ${err}`);
    } else {
      console.log("email was send successfully");
    }
  });
};

module.exports = { sendEmail };
