import { uploadFile } from '../services/storage.service.js';
import { generateCaption } from '../services/ai.service.js';
import {v4 as uuidv4} from 'uuid';
import { createPost ,getPosts} from '../dao/post.dao.js';
import { createComment } from '../dao/comment.dao.js';
import { createLike, deleteLike, isLikeExists } from '../dao/like.dao.js';




export async function createPostController(req,res){
    const {mentions} =req.body;

  
    const [file,caption] = await Promise.all([
        uploadFile(req.file,uuidv4()),
        generateCaption(req.file)
    ])

    const post=await createPost({
        mentions,
        url:file.url,
        caption,
        user:req.user._id
    })

    res.status(201).json({
        message:"post created successfully",
        post
    })
}




export async function getPostsController(req,res){
    

    const posts=await getPosts(
        req.query.skip,
        Math.min(req.query.limit,20)
    )

    res.status(200).json({
        message:"posts fetched successfully",
        posts
    })
}



export async function createCommentController(req,res){
    const {post,text}=req.body;
    const user=req.user;


    const comment=await createComment({
        user:user._id,
        post,
        text
    })

    res.status(201).json({
        message:"comment created successfully",
        comment
    })
}



export async function createLikeController(req,res){
    const {post}= req.body;
    const user= req.user;

    const isLikeAlreadyExists=await isLikeExists({
        user:user._id,
        post
    });

    if(isLikeAlreadyExists){
        await deleteLike({user:user._id, post});
        
        return res.status(200).json({
            message:"liked removed successfully"
        })
    }

    const like=await createLike({
        user:user._id,
        post
    })

    res.status(201).json({
        message:"post liked successfully",
        like
    })

}
    
    


    

