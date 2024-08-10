import express from "express";
import mongoose from "mongoose";
import cors from 'cors';
import dotenv from 'dotenv';
import morgan from "morgan";
import router from "./src/routes/index.routes.js";


dotenv.config();
const app = express();

//Middleware
app.use(cors());
app.use(express.json())
app.use(morgan('dev'));
app.use(express.json());

//Routes
app.use("/api/", router);

//Database connection
mongoose.connect('mongodb://localhost:27017/Sneakult', {
    // useNewUrlParser: true,
    // useUnifiedTopology: true
}).then(() => {
    console.log('Database connected');
}).catch((error) => {
    console.error('Database connection error:', error);
});

//error Handling
app.use((err, req, res, next) => {
    console.log(err.stack);
    res.status(500).send('Something went wrong');

});
const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Server is started on port ${PORT}`);

})


app.get('/', (req, res) => { res.send("fhbfhrbh") })