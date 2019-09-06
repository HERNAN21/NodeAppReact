var express = require("express")
var cors = require("cors")
var bodyParser = require("body-parser")
var app = express();
var port = process.env.PORT || 5000

app.use(bodyParser.json())
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))

var API = require('./routes/API')

app.use(API)
app.listen(port, () => {
    console.log("Server running on port: " + port)
})

mailer.extend(app, {
  from: 'no-reply@example.com',
  host: 'smtp.gmail.com', // hostname
  secureConnection: true, // use SSL
  port: 465, // port for secure SMTP
  transportMethod: 'SMTP', // default is SMTP. Accepts anything that nodemailer accepts
  auth: {
    user: 'gmail.user@gmail.com',
    pass: 'userpass'
  }
});