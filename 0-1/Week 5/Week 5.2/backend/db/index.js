const mongoose = require("mongoose");

mongoose.connect('mongodb+srv://saneraza78692:Z1fj9OAuuZXAMjAh@cluster0.kteciji.mongodb.net/');
console.log("connected mongodb");
      
const todoSchema = mongoose.Schema({
    title:String,
    description: String,
    completed:Boolean
}
,{
        timestamps: true // Automatically adds createdAt and updatedAt fields
})

module.exports = mongoose.model("Todo", todoSchema);