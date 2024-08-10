import express from "express";
import mongoose from "mongoose";
import cors from 'cors';
import dotenv from 'dotenv';
import morgan from "morgan";

import reviewRoutes from './src/routes/review.routes.js'
import postRoutes from './src/routes/post.routes.js'
import listRoutes from './src/routes/list.routes.js'
import paymentRoutes from './src/routes/payments.routes.js'
import userRoutes from './src/routes/user.routes.js'
import followerRoutes from './src/routes/followers.route.js'
import followingRoutes from './src/routes/following.routes.js'


dotenv.config();
const app = express();

//Middleware
app.use(cors());
app.use(express.json())
app.use(morgan('dev'));

//Routes
app.use(express.json());
app.use('/api/reviews',reviewRoutes);
app.use('/api/posts',postRoutes);
app.use('/api/listings',listRoutes);
app.use('/api/payments',paymentRoutes);
app.use('/api/users',userRoutes);
app.use('/api/followers',followerRoutes);
app.use('/api/following',followingRoutes);

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
app.use((err,req,res,next)=>{
    console.log(err.stack);
    res.status(500).send('Something went wrong');
    
});
const PORT = 5000;
app.listen(PORT, ()=>{
    console.log(`Server is started on port ${PORT}`);
    
})


app.get('/',(req,res)=>{res.send("fhbfhrbh")})