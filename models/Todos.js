const mongoose =require('mongoose');
const Schema = mongoose.Schema;

const TodosSchema = new Schema({
  title:{
    type: String,
    required:true
  },
  description :String
}, {timestamps : true });//kuntime ma create ra update gareko

module.exports = mongoose.model('Todos', TodosSchema);