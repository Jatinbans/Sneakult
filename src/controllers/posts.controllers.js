import { Posts } from "../models/postsmodels.js";
//create post
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
};

//get all posts
export const getAllPosts = async(req,res)=>{
    try{
        const posts = await Posts.find();
        res.status(200).json(posts);
    }
    catch(error){
        res.status(500).json({error:error.message})
    }
};

//get post by id
export const getPostById = async(req,res)=>{
   try{
    const {id} = req.params;
    const post = await Posts.findById(id);
    if(!post){
        return res.status(404).json({message:'Post not found'})
    }
    res.status(200).json(post);
   }
   catch(error){
    res.status(500).json({error:error.message})
}
};

//update post 
export const updatePostbyId = async(req,res)=>{
    try{
        const{id} = req.params;
        const{content}=req.body;
        const updatePost = await Posts.findByIdAndUpdate(
            id,
            {content},
            {new:true}
        );
        if(!updatePost){
            return res.status(404).json({message:'Post not found'});
        }
        res.status(200).json(updatePost)
    }
    catch(error){
        res.status(500).json({error:error.message})
    }
};

//Delete post by id
export const deletePost = async(req,res)=>{
    try{
    const {id} = req.params;
    const deletedpost = await Posts.findByIdAndDelete(id);
    if(!deletedpost){
        return res.status(404).json({message:"Post not found"});
    }
    res.status(200).json({message:"Post deleted successfully"});
    }
    catch(error){
        res.status(500).json({error:error.message})
    }    
};
