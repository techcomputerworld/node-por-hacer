// const argv ... 
// comando crear 'Crear un elemento por hacer'
//     --descripcion -d
// comando actualizar 'Actualiza el estado completado de una tarea'
//     --descripcion -d
//     --completado -c true si no especificamos nada sera true
//     --help 
const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'descripción de la tarea por hacer'
};

const completado = {
    alias: 'c',
    default: true,
    desc: 'Marca como completado o pendiente la tarea'
}

let optCrear = {
    descripcion
    // descripcion: {
    //     demand: true,
    //     alias: 'd',
    //     desc: 'Descripcion de la tarea por hacer'
    // }
}
let optUpdate = {
    descripcion,
    completado
    // descripcion: {
    //     demand: true,
    //     alias: 'd'
    // },
    // completado: {
    //     alias: 'c',
    //     default: true,
    //     desc: 'Marca como completado o pendiente la tarea'
    // }
}
let optBorrar = {
    descripcion
    // descripcion: {
    //     demand: true,
    //     alias: 'd',
    //     desc: 'borra la tarea elegida'
    // },
}
const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', optCrear)
    .command('actualizar', 'Actualiza el estado completado de una tarea', optUpdate)
    .command('borrar', 'borra la tarea elegida ', optBorrar)
    .help()
    //hay que retornar argv por eso se pone
    .argv;

// Para que funcione necesitamos exportar nuestro objeto
module.exports = {
    argv
}