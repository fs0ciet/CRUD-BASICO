import axios from 'axios'

//Envia datos con el método post a 'http://localhost:3000/create'
axios.post('http://localhost:3000/create',{
nombre:'inputName',
apellido:'inputSurname',
edad:0
}).then((res) => {
    console.log('respuesta: ',  res.data)   
}).catch((error) => {
    console.error(error)
});

//Envia los datos con el método post a 'http://localhost:3000/users'
axios.get('http://localhost:3000/users')
.then(res => {
    console.log('respuesta: ',res.data)})
.catch(error => {
    console.error(error)
});

//Envia la id a 'http://localhost:3000/users/:id'
axios.get('http://localhost:3000/users/4'
).then((respuesta) =>{
    console.log('respuesta: ', respuesta.data);
}).catch((error) =>{
    console.error(error);
})

//Envia datos con el método put a 'http://localhost:3000/update'
axios.put('http://localhost:3000/update',{
    id:3,//inputId
    nombre:'newNuevo',
    apellido:'newSurname',
    edad:0//inputNewAge
}).then((respuesta) =>{
    console.log('respuesta: ', respuesta.data);
}).catch((error) =>{
    console.error(error);
})

