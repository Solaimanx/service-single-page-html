if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

var corsOptions = {
  origin: "*",
  methods: ["GET", "PUT", "POST", "DELETE", "OPTIONS"],
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  credentials: true, //Credentials are cookies, authorization headers or TLS client certificates.
  allowedHeaders: [
    "Content-Type",
    "Authorization",
    "X-Requested-With",
    "device-remember-token",
    "Access-Control-Allow-Origin",
    "Origin",
    "Accept",
  ],
};

const port = process.env.PORT || "4000";
const email = require("./email");

app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json())

app.get("/", (req, res) => {
  res.send("working");
});

app.post("/email", (req, res) => {
  console.log(req.body);

  // email.sendEmail()

  res.send('success')
});

app.listen(port, () => {
  console.log("server is running on ", port);
});
