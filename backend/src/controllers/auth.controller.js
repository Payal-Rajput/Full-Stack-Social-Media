import userModel from "../models/user.model.js";
import bcrypt from 'bcryptjs';
import { createUser, findOneUser,findUser } from "../dao/user.dao.js";


export async function registerController(req,res){
    const {username,email,password}=req.body;

    const isUserExist=await findOneUser({
        $or:[
            {
                username
            },
            {
                email
            }
        ]
    });

    if(isUserExist){
        return res.status(400).json({
            message:"User already exists"
        })
    }

    const hashedPassword=await bcrypt.hash(password,10);
    
    const user=await createUser({
        username,
        email,
        password:hashedPassword,
    });

    return res.status(201).json({
        message:"User created successfully",
        user:{
            id:user.__id,
            username:user.username,
            email:user.email,
            image:user.image,
            bio:user.bio,
            
        }
    })

}