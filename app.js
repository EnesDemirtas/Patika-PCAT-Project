const express = require("express")
const path = require("path")

const app = express()


// MIDDLEWARES -> Everything between requests and responses.
app.use(express.static("public"))


app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "temp/index.html"))
})

const port = 3000
app.listen(port, () => {
    console.log(`Server is started at port ${port}...`)
})
