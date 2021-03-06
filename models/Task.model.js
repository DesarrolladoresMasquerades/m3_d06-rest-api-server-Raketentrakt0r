const mongoose = require("mongoose");
const {Schema, model} = mongoose;

const taskSchema = new Schema({
  title:{type:String,required:true},
  description: String,
  project:{type:Schema.Types.ObjectId, ref:"Project", required:true}
})

module.exports = model("Taks", taskSchema)