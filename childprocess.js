import { exec } from 'child_process'

//Se ejecutan en un hilo separado, es una ejecucion aparte para obtener solo el resultado de SO
//por lo que pueden ejecutar scripts de otros lenguajes
//si este codigo es de python y no tiene dependencias, podriamos tenerlo en la misma carpeta del backend
//si tiene librerias tambien podria, pero si son muchos servicios, seria mejor separarlo en una nueva aplicacion y cosumirlo via fetch
//muchos servicios de ml tienen wrapers para nodejs, asi que por ahi podemos consumir
//porque recordar que aparte de las dependencias de python tambien esta el consumo de recursos, hilos ya qu es computo intensivo

//A diferencia de los workers estos ejecuta js en un v8 y libuv independiente

exec('ls -la', (err, stdout, stderr) => {
    console.log(stdout);
})
