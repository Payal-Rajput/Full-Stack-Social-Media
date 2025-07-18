import bcrypt from 'bcryptjs';
import { createUser, findOneUser, findUser } from "../dao/user.dao.js";
import config from '../config/config.js'
import jwt from 'jsonwebtoken'

export async function registerController(req, res) {
    const { username, email, password } = req.body;

    const isUserExist = await findOneUser({
        $or: [
            {
                username
            },
            {
                email
            }
        ]
    });

    if (isUserExist) {
        return res.status(400).json({
            message: "User already exists"
        })
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await createUser({
        username,
        email,
        password: hashedPassword,
    });

    const token = jwt.sign({ _id: user._id }, config.JWT_SECRET);
    res.cookie('token', token);

    return res.status(201).json({
        message: "User created successfully",
        user: {
            id: user.__id,
            username: user.username,
            email: user.email,
            image: user.image,
            bio: user.bio,

        }
    })

}


export async function loginController(req, res) {
    const { email, username, password } = req.body;

    const user = await findOneUser({
        $or: [ {username} , {email} ]
    })

    if(!user){
        return res.status(400).json({
            message:"invalid username or password"
        })
    }

    const isPasswordValid=await bcrypt.compare(password,user.password);

    if(!isPasswordValid){
        return res.status(400).json({
            message:"invalid username or password"
        })
    }

    const token=jwt.sign({_id:user._id}, config.JWT_SECRET)
    res.cookie('token',token);

    return res.status(200).json({
        message:"login successfully",
        user:{
            id:user._id,
            username:user.username,
            email:user.email,
            image:user.image,
            bio:user.bio,

        }
    })
}

