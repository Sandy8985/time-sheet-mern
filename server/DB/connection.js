const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/Time_Sheets")
.then(()=>{
    console.log("connection Established !")
}).catch((err)=>{
    console.log(err)
})