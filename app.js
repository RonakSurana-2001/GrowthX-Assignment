const express = require("express");
const app=express()
const PORT=process.env.PORT || 3000
const cors=require("cors")
const dotenv=require("dotenv")
const connectToDb=require("./database/db")

dotenv.config()
connectToDb()
app.use(express.json())
app.use(cors())


app.use("/",require("./routes/routes"))

app.listen(PORT,()=>{
    console.log(`App Running on PORT ${PORT}`)
})