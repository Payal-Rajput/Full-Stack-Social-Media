import mongoose from 'mongoose';

const postSchema=new mongoose.Schema({
    image:{
        type:String,
        required:true

    },
    caption:{
        type:String,
        required:true

    },
    mentions:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'users'
        }
    ],
    user:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'users'
        }
    ],


})

const postModel=mongoose.model('posts',postSchema);

export default postModel;
