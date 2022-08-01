const alumnos = require('../database/alumnos.js')

function getAllAlumnos(skip,limit)
{
    return alumnos.getAllAlumnos(skip, limit)
}

function getOneAlumno(id)
{
    return alumnos.getOneAlumno(id)
}

function createNewAlumno(newAlumno)
{
    return alumnos.createNewAlumno(newAlumno)
}

function editAlumno(id, newAlumno)
{
    return alumnos.editAlumno(id, newAlumno)
}

function deleteAlumno(id)
{
    return alumnos.deleteAlumno(id)
}

module.exports={
    getAllAlumnos,
    getOneAlumno,
    createNewAlumno,
    editAlumno,
    deleteAlumno
}