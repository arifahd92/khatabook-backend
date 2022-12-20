require('dotenv').config()
const url=process.env.MONGO_URL
// const url = "mongodb+srv://arif:tSt0CJFEg2GgqJQs@cluster0.ufr2nrv.mongodb.net/mern?retryWrites=true&w=majority"
console.log(url)
const mongoose=require("mongoose")
mongoose.connect(url)
.then(()=>console.log("connection successfull"))
.catch((err)=>console.log("******************************8",err))