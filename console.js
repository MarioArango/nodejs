console.log('hola')
console.error('Error')
console.warn('Advertencia!');

const persona = [
    {
        nombre: 'Mario',
        edad: 29
    },
    {
        nombre: 'Clara',
        edad: 26
    }
]

console.table(persona)

console.group('1')
console.log('Log de cabecera')
console.log('Log de json')
console.log('Log de fin')
console.groupEnd('1')

console.group('2')
console.log('Log de cabecera 2')
console.log('Log de json 2')
console.log('Log de fin 2')
console.groupEnd('2')

console.count('mario')
console.count('mario')
console.count('mario')
console.count('mario')
console.countReset('mario')
console.count('mario')


//Console.time respeta la asincronia ya sea con callbacks o promesas
// Iniciar el temporizador
console.time('miProceso');

// Aquí va el código que quieres medir
const array = [];
for(let i = 0; i < 1000000; i++) {
    array.push(i);
}

// Finalizar el temporizador y mostrar el resultado
console.timeEnd('miProceso'); // Output: miProceso: 12.345ms