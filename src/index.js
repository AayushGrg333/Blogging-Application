require('dotenv').config();
const express = require("express")
const path = require("path")

// router register
const mongoConnect =  require('./config/db')
const userRoute = require("./routes/user")

const app = express();
const PORT  = process.env.PORT;

//middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//connecting with mongodb
mongoConnect()

//setting view engine
app.set("view engine",'ejs');
app.set("views",path.resolve(__dirname,"views"));

//setting path
app.get('/', (req,res)=>{
    res.render('home');
})

app.use("/user",userRoute);

//starting server
app.listen(PORT, ()=> console.log(`Server has been started Port:${PORT}`))