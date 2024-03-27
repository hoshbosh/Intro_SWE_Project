import mongoose from "mongoose";
const timeLogSchema=new mongoose.Schema({
    id:{type:String},
    time:{type:Number},
    date:{type:Date},
    category:{type:String}
})
export const TimeLog=mongoose.model("TimeLog", timeLogSchema)
const userSchema=new mongoose.Schema({
    id: {type:String, required:true},
    username:{type:String},
    friends:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"friend"
    }],
    history: [{
        type:mongoose.Schema.Types.ObjectId,
        ref:"TimeLog"
    }],
    score:{type:Number},
    categories:[String]
})
export const User=mongoose.model("User", userSchema)