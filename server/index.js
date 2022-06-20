import express from "express"; 
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from 'cors'; 
import roomRoutes from "./routes/room.js"; 
const app= express();

app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true})); 
app.use(cors()); 


app.use('/room',roomRoutes);

app.get('/',(req,res) => {
    res.send('Hello Universe!');
})

const PORT = process.env.PORT || 5001;

mongoose.connect('mongodb+srv://arpit_first:nexuses@cluster0.3y8gxjb.mongodb.net/?retryWrites=true&w=majority').then(()=> app.listen(PORT,() => console.log(`Server running on : ${PORT}`)))
.catch((error)=> console.log(error.message));
