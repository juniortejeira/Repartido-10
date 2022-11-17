const mongoose = require('mongoose');
const express = require('express')
const Perro = require('./Backend/data')
const path = require('path')


const url = 'mongodb+srv://Junior-Matea:junior123@junior.rqdnvjb.mongodb.net/test';
const app = express();
app.use(express.static(__dirname + '/public'))

//rutas dinamicas
app.use(express.urlencoded({extended: true}))//para usar rutas dinamicas
app.use(express.json())//Esa expresion lee lo que vos pasas en el body de insomnia, y si es un json lo convierte a objeto de js


app.post('/create', async(req,res)=>{
   const newUsers = await Perro.create(req.body);
   console.log({body:req.body})
   res.json(newUsers)//respondemos con un json     

   
})

app.post('/update', async(req,res)=>{
    const updateMany = await Perro.updateMany({"Name":"Salem"},{$set: req.body})
    res.json(updateMany)
    console.log('update =>' , updateMany) 
 })


 app.post('/delete', async(req,res)=>{
    const deletes = await Perro.deleteMany({"features":"Muy tranquilo y ama dormir"})
    res.json(deletes)
 })
 
 app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/index.html"))
});

 app.get('/search', async(req, res)=>{
     const show = await Perro.find()
     console.log('Show =>' ,show)
     res.json(show);
 })
 
 mongoose.connect(url)
 .then(async () => {
    app.listen('3000', () => {console.log("Server Iniciado")})
})

/* 
const Delete = async () => {
    await Perro.deleteMany()
    console.log('Borrado correctamente')
}
const mostrar = async () =>{
}
*/

/* 

const update = async () =>{
    const updateMany = await Perro.updateMany({'Name':'Toby'},{$set:{'height':'100cm'}})
    const find = await Perro.find({'Name':'Toby'})
    console.log('update =>' , find)
} */


/* Delete()
mostrar() */
/* create()
update() */

/* app.get('/', async(req, res)=>{
    const find = await Perro.insertMany([{'Name':'Salem','Age':9,'Tipe':'Gato','features':'Muy tranquilo y ama dormir'},
    {'Name':'Mateo','Age':5,'Tipe':'Gato','features':'Le gusta comer budín'},
    {'Name':'Chuchi','Age':4,'Tipe':'Gata','features':'Es muy peluda y tiene problemas sociales'},
    {'Name':'Neko','Age':3,'Tipe':'Gato','features':'Te ama solo si le das de comer'},
    {'Name':'Mia','Age':2,'Tipe':'Perra','features':'No le gustan los extraños'},
    {'Name':'Memi','Age':1,'Tipe':'Gata','features':'Es muy chiquita y le gusta cantar'},
    {'Name':'Keyko','Age':0.9,'Tipe':'Perra','features':'Es muy chiquita y le gusta cantar'}
])
console.log('find =>' ,find)
res.json(find);

const create = async () =>{
    const creador = await Perro.create([{'Name':'Toby','Age':6,'Tipe':'Perro','features':'Te ama solo si le das de comer'}])
    const showCreate = await Perro.find({'Name':'Toby'});
    console.log('Creador =>' ,showCreate)
}
}) */