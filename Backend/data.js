const {Schema, model} = require('mongoose')

const Perro = new Schema({
  Name: String,
  Age: Number,
  Tipe: String,
  features:String,
  height:String
},{versionKey: false})

module.exports = model('Perros', Perro);
/* const Perro = new mongoose.Schema({
  Name: String,
  Age: Number,
  Tipe: String,
  features:String,
  height:String
},{versionKey: false}) */

//const Perro = mongoose.model('Cat', schemaData);
//exportamos los schemas