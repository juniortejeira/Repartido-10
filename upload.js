const mongoose = require("mongoose");
const Perro = require("./Backend/data")

const db = [{"Name":"Salem","Age":9,"Tipe":"Gato","features":"Muy tranquilo y ama dormir"},
  {"Name":"Mateo","Age":5,"Tipe":"Gato","features":"Le gusta comer budín"},
  {"Name":"Chuchi","Age":4,"Tipe":"Gata","features":"Es muy peluda y tiene problemas sociales"},
  {"Name":"Neko","Age":3,"Tipe":"Gato","features":"Te ama solo si le das de comer"},
  {"Name":"Mia","Age":2,"Tipe":"Perra","features":"No le gustan los extraños"},
  {"Name":"Memi","Age":1,"Tipe":"Gata","features":"Es muy chiquita y le gusta cantar"},
  {"Name":"Keyko","Age":0.9,"Tipe":"Perra","features":"Es muy chiquita y le gusta cantar"}
]
mongoose.connect('mongodb+srv://Junior-Matea:junior123@junior.rqdnvjb.mongodb.net/test')
  .then(async () => {
// ejecutar upload.js para cargar los archivos
   await Perro.insertMany(db)
   console.log("data subida correctamente")

}) 
  .catch(err => console.log(err));

  