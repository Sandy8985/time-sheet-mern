const express = require("express")
const app = express();
const cors = require("cors")

// const profile = require('./routes/profileRoutes')
const authroutes = require("./routes/authRoutes")
const adminroutes = require("./routes/adminRoutes")
require("./DB/connection")

const port = process.env.PORT || 4000

//middleware 
app.use(express.json())
app.use(cors())


//routes
app.use("/api/employee",authroutes)
app.use("/api/admin",adminroutes)

app.listen(port,()=>{
    console.log(`your server is running on ${port}..!`)
})