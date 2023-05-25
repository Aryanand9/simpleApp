import mongoose from "mongoose";
let isConnented = false;

export const connectToDB = async()=>{
    mongoose.set('strictQuery', true)

    if(isConnented){
        console.log('MONGODB is Already Connected')
        return;
    }
    try{
        mongoose.connect(process.env.MONGODB_URI,{
            dbName:'shareme_prompt',
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        isConnented=true
        console.log("MONGODB Connected");
    }
    catch(error){
        console.log(error)
    }
}