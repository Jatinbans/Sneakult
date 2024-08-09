import { Posts } from "../models/postsmodels";
export const createPost = async(req,res)=>{
    try{
    const {content} = req.body;
    const post = new Posts({content});
    await post.save();
    res.status(201).json(post);
    }
    catch(error){
        res.status(500).json({error:error.message});
    }

    
}