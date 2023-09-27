require("dotenv").config();
const express = require("express");
const app = express();
require("./db/conn");
const router = require("./routes/router");
const cors = require("cors");
const cookiParser = require("cookie-parser")
const port = 8009; 


app.get("/",(req,res)=>{
    res.status(201).json("server created") 
});

app.use(express.json());
app.use(cookiParser());
app.use(cors(
    {
        origin: ["https://mern-auth-zlsj.onrender.com/"],
        method:[ "GET", "POST"],
        credentials: true
    }
));
app.use(router);


app.listen(port,()=>{
    console.log(`server start at port no : ${port}`);
})