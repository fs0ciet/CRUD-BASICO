//Importación de librerias para el proyecto
import express from 'express'
import fs from 'fs'

const app = express()
app.use(express.json())

//Declaración de metodos
const DB = {
    file: './data.json', //Directorio donde se guardaran los archivos
    load(){
        return JSON.parse(fs.readFileSync(this.file)) //Carga datos en el data.JSON
    },
    save(data){
        fs.writeFileSync(this.file, JSON.stringify(data, null, 2)) //Guarda datos editando los datos actuales
    }
}

const users = DB.load() //Renombrar método para más facilidad a la hora de usarlo

//RUTAS

app.get("/users", (req, res) => {
    res.setHeader('Content-Type', 'application/json')
    res.json({
        users
    })
})

app.get("/users/:id", (req, res) => {
    const id = req.params.id
    const user = users.find(u => u.id == id)
    console.log(user)
    res.json({
        user
    })
})

app.post("/create", (req, res) => {
    const user = req.body
    user.id = users.length
    users.push(user)
    DB.save(users)
    res.json ({
        msg: `Usuario Nuevo: ${user}`
    })
})

app.put("/update", (req, res) => {
    const userUp = req.body
    const user = users.find(u => u.id === userUp.id)
    if (user) {
        user.nombre = userUp.nombre
        user.apellido = userUp.apellido
        user.edad = userUp.edad
        DB.save(users)
        console.log("El usuario ha sido actualizado", user)
    }   else {
        res.status(404).json({message: "El usuario no ha sido encontrado"})
    }
}) 




//Definimos el puerto en donde correra nuestra aplicación
app.listen(3000,() => {
    console.log("!Mi aplicación esta corriendo correctamente en el puerto 3000¡")
})
