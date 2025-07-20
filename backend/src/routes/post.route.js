import express from 'express';
import { createPost } from '../controllers/post.controller.js';
import { authMiddleware } from '../middleware/auth.middleware.js';
import { uploadFile } from '../services/storage.service.js';
import multer, { memoryStorage } from 'multer'



const upload=multer({storage:multer.memoryStorage()})

const router=express.Router();

router.post('/posts',authMiddleware,upload.single("image"),createPost);

export default router;