"user server"
import { connectToMongo } from "../mongoose";
import { User } from "../models";

export const updateUser=(_id: string, _username: string)=>{
    try{
        connectToMongo()
        User.findOneAndUpdate(
            {id: _id,},
            {
                username:_username.toLowerCase(),
                friends:new Array<String>(),
                history:new Array<String>(),
                score: 0,
                categories: new Array<String>()
            },
            {upsert:true}
        )
    }catch(err){
        console.log(err)
    }
}