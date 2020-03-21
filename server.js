var express = require("express")
var next = require("next")
var cors = require("cors")
var bodyParser = require("body-parser")
// var app = express()
var port = process.env.PORT || 3000

//connecting express with next
var dev = process.env.NODE_ENV !== "production"
var app = next({ dev })
var handle = app.getRequiredHandler()

app.use(bodyParser.json())
app.use(cors())
app.use(
    bodyParser.urlencoded({ extended: false })
)

var Users = require("./routes/Users")
var Stickerjob = require("./routes/Stickerjob");

app.use("/users", Users)
app.use("/api", Stickerjob)

//making next server use express
app.prepare().then(() => {
    const server = express()
    server.get("*", (req, res) => {
        res.send("send successful")
    })
    server.listen(port, function () {
        console.log("Server is running on port " + port)
    })
})


