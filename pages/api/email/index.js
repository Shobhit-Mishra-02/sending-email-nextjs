const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const handler = (req, res) => {
  const { method } = req;

  if (method === "POST") {
    const { email, message } = req.body;

    const msg = {
      to: email,
      from: `${process.env.SENDER_MAIL}`,
      subject: "sending through sendGrid",
      text: "Hello everyone this is comming from my app",
      html: `<strong>${message}</strong>`,
    };

    sgMail
      .send(msg)
      .then(() => {
        res.status(200).send("working");
      })
      .catch((err) => {
        res.status(400).send({
          message: "error happended",
        });
      });
  } else {
    res.status(400).json({
      message: "wrong request !!",
    });
  }
};

export default handler;
