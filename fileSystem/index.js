import fs from 'fs'

//Leer archivo
const readFile = (path) => {
    fs.readFile(path, 'hex', (error, data) => {
        console.log(data);
    })
}

readFile('./archivo.txt');