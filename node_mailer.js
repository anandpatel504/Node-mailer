const express = require("express");
const app = express();
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
app.use(bodyParser());

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/Mail.html");
});

app.post("/mail", (req, res) => {
  var response = req.body;
  console.log(response)
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: response.user,
      pass: response.password
    }
  });
  var mailOptions = {
    from: response.user,
    to: response.emailid,
    subject: response.subject,
    text: response.text
  };
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      res.sendFile(__dirname+"/views/Error.html")
    } else {
      console.log('Email sent successfully: ' + info.response);
      console.log(mailOptions);
      res.sendFile(__dirname+"/views/Success.html")
    }
  });
});

var server = app.listen(8081, function() {
  var host = server.address().address;
  var port = server.address().port;
  console.log("Server is running on port.....");
  console.log(host, port);
});
