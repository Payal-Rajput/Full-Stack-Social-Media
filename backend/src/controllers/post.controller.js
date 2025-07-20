import postModel from '../models/post.model.js';
import { uploadFile } from '../services/storage.service.js';
import { generateCaption } from '../services/ai.service.js';
import {v4 as uuidv4} from 'uuid';

export async function createPost(req,res){
    const {mentions} =req.body;

  
    const [file,caption] = await Promise.all([
        uploadFile(req.file,uuidv4()),
        generateCaption(req.file)
    ])

    console.log(req.user);
    
    


    

}