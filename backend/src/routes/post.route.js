import express from 'express';
import {  createPostController,getPostsController,createCommentController,createLikeController } from '../controllers/post.controller.js';
import { authMiddleware } from '../middleware/auth.middleware.js';
import { uploadFile } from '../services/storage.service.js';
import multer from 'multer'
import { registerValidator,getPostsValidator,createCommentValidator, createLikeValidator } from '../middleware/validator.middleware.js';



const upload=multer({storage:multer.memoryStorage()})

const router=express.Router();

router.post('/',
    registerValidator,
    authMiddleware,
    upload.single("image"),
    createPostController
);


router.get('/get-posts',
    getPostsValidator,
    authMiddleware,
    getPostsController
)


router.post('/comment',
    createCommentValidator,
    authMiddleware,
    createCommentController
);


router.post('/like',
    createLikeValidator,
    authMiddleware,
    createLikeController
);



export default router;