const fs = require('fs');


let listadoPorHacer = [];

const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);
    fs.writeFile("./db/data.json", data, (err) => {
        if (err) throw Error('no se pudo grabar');
    });
}

const cargarDB = () => {
    try {
        listadoPorHacer = require('../db/data.json');
    } catch {
        listadoPorHacer = [];
    }
}

//tal vez me interese poner parametros
const getListado = () => {
    cargarDB();
    return listadoPorHacer;

}

const crear = (descripcion) => {

    cargarDB();
    let porHacer = {
        descripcion,
        completado: false
    };
    listadoPorHacer.push(porHacer);
    //los métodos se ponen de esta manera como esta guardarDB();
    guardarDB();
    return porHacer;
}
const actualizar = (descripcion, completado = true) => {
    cargarDB();
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);
    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;

    }
}
const borrar = (descripcion) => {
    cargarDB();
    //let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);
    let nuevoListado = listadoPorHacer.filter(tarea => tarea.descripcion !== descripcion);
    //esto significa que son iguales y entonces no lo borro
    if (listadoPorHacer.length === nuevoListado.length) {
        return false;
    } else {
        listadoPorHacer = nuevoListado;
        guardarDB();
        return true;
    }


}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}