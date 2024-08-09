import express from "express";
import reviewRoutes from './src/routes/review.routes.js';
import postRoutes from './src/routes/post.routes.js'
const app = express();
app.use(express.json());
app.use('/api/reviews',reviewRoutes);
app.use('/api/posts',postRoutes);

const PORT = 5000;
app.listen(PORT, ()=>{
    console.log(`Server is started on port ${PORT}`);
    
})