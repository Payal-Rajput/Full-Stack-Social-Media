import express from 'express';
import {  createPostController } from '../controllers/post.controller.js';
import { authMiddleware } from '../middleware/auth.middleware.js';
import { uploadFile } from '../services/storage.service.js';
import multer, { memoryStorage } from 'multer'



const upload=multer({storage:multer.memoryStorage()})

const router=express.Router();

router.post('/',authMiddleware,upload.single("image"),createPostController);

export default router;