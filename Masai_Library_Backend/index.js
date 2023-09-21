const express=require("express");
const {connection}=require("./db")
const {userRouter}=require("./routes/user.routes")
const {bookRouter}=require(".//Route/book.route")
const {auth}=require("./Middileware/auth")
const cors=require("cors")
require(`dotenv`).config();


const app=express();

app.use(express.json())
app.use(cors())

app.get("/",(req,res)=>{
    res.send("Home Page")
})

app.use("/user",userRouter)
 app.use(auth)
app.use("/book",bookRouter)




app.listen(process.env.port,async()=>{
    try{
        await connection
        console.log("Connected to db")

    }catch(err){
        console.log("Connection failed to db")
        console.log(err)

    }

console.log(`Server is running at ${process.env.port}`)
})