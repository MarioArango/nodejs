import { readFile, writeFile, unlink } from 'fs/promises';

//Hay 3 formas de manejas, mendiente callbacks, asincronismo y sincronos (no recomendado, bloquea el hilo principal)

//Las APIs de callbacks y promesas usan el threadpool de libuv de Node.js para realizar operaciones del sistema de archivos fuera del hilo del event loop

//Los callbacks son más rapidos que las promesas en aprox 3% a 5% porque internamente las promesas manjean estados de respuesta, pero las promesas son más faciles de leer
//Pero esta pequeña diferencia solo se ve en operaciones de lectura y escritura de archivos muy grandes

//Leer archivo es por defecto asincrono
const readCurrentFile = async (path) => {
    try {
        const data = await readFile(path, 'utf-8');
        console.log(data);
    }catch(error) {
        console.error('Error: ', error);
    }
}

const writeCurrentFile = async (path, content) => {
    try {
        await writeFile(path, content);
        console.log('Archivo creado');
    } catch (error) {
        console.error('Error: ', error);
    }
}

const deleteCurrentFile = async (path) => {
    try {
        await unlink(path);
        console.log('Archivo eliminado');
    } catch (error) {
        console.error('Error: El archivo no existe');
    }
}

const main = async () => {
    await readCurrentFile('./archivo.txt');
    await writeCurrentFile('./archivo2.txt', 'Hola mundo');
    await deleteCurrentFile('./archivo2.txt');
}

main()



