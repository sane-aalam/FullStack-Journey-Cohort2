import mongoose from "mongoose";
import { DB_NAME } from "./dburl.js";
import { DB_URL } from "./dburl.js";

const connectDB = async () =>{
    try{
        const connectionInstanceDB = await mongoose.connect(`${DB_URL}/${DB_NAME}`);
         console.log(`\n MongoDB connected !! DB HOST: ${connectionInstanceDB.connection.host}`);
    }catch(error){
        console.log("MONGODB connection FAILED ", error);
        process.exit(1)
    }
}

const todoSchema = mongoose.Schema({
    title:{
        type: String,
        required: true,
        trim: true
  },
    description: {
            type: String,
            required: true,
            trim: true
    },
    completed:{
        type:Boolean,
        required:true
    }
    }
  ,{
        timestamps: true // Automatically adds createdAt and updatedAt fields
})

module.exports = mongoose.model("Todo", todoSchema);