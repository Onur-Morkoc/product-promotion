const dotenv = require("dotenv").config()
const ConnectDatabase = require("./Datebase")

ConnectDatabase()

const express = require("express")
const app = express()
const cookieParsel = require("cookie-parser")
const bodyParser = require("body-parser");
const cors = require("cors")

const server = app.listen(process.env.PORT, () => {
    console.log(`Giriş Yapıldı. Port: ${process.env.PORT}`)

})

const allowedDomains = process.env.NODE_ENV ==="production"?
[
    process.env.REMOTE_CLIENT_APP,
    process.env.REMOTE_SERVER_API
]:[
    process.env.LOCAL_CLIENT_APP,
    process.env.LOCAL_SERVER_API
]

console.log(process.env.NODE_ENV)

app.use(cookieParsel())

app.use(bodyParser.json({
  limit: '50mb'
}));

app.use(bodyParser.urlencoded({
  limit: '50mb',
  parameterLimit: 100000,
  extended: true
}));

app.use(cors({origin:allowedDomains}))

app.use('/uploads', express.static('uploads'));

const product = require("./Routes/projectRoute")
const user = require("./Routes/userRoute")

app.use("/api/v1", product)
app.use("/api/v1", user)


const errorMiddleware = require("./Middleware/Error")

//app.use(errorMiddleware)



