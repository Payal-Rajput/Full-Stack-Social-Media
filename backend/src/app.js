import express from "express";
import cookieParser from "cookie-parser";
import authRouter from "./routes/auth.route.js";
import postRouter from "./routes/post.route.js";

const app=express();

app.use(cookieParser());
app.use(express.json());

app.use('/auth',authRouter);
app.use('/post',postRouter);
export default app;
