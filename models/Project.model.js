const mongoose = require("mongoose")

const {Schema, model} = mongoose;

const projectSchema = new Schema({
  title:{type: String, required: true},
  description:{type: String, maxLength:500},
  //owner:{type: Schema.type.ObjectId, ref:"User"},
  tasks:[{type:Schema.Types.ObjectId, ref:"Tasks", default:[] }]
})

const Project = model("Project", projectSchema)

module.exports = Project