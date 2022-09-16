const express = require("express")
const app = express()
const cookieParsel = require("cookie-parser")
const bodyParser = require("body-parser");
const cors = require("cors")


app.use(cookieParsel())
app.use(bodyParser.json({
    limit: '50mb'
  }));
  
  app.use(bodyParser.urlencoded({
    limit: '50mb',
    parameterLimit: 100000,
    extended: true 
  }));
app.use(cors())
app.use('/uploads', express.static('uploads'));

const product = require("./Routes/projectRoute")
const user = require("./Routes/userRoute")

app.use("/api/v1", product)
app.use("/api/v1", user)


const errorMiddleware = require("./Middleware/Error")

//app.use(errorMiddleware)


module.exports = app