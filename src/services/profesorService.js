const profesores = require('../database/profesores.js')

function getAllProfesores(skip, limit)
{
    return profesores.getAllProfesores(skip, limit)
}

function getOneProfesor(id)
{
    return profesores.getOneProfesor(id)
}

function createNewProfesor(newProfesor)
{
    return profesores.createNewProfesor(newProfesor)
}

function editProfesor(id, newProfesor)
{
    return profesores.editProfesor(id, newProfesor)
}

function deleteProfesor(id)
{
    return profesores.deleteProfesor(id)
}

module.exports={
    getAllProfesores,
    getOneProfesor,
    createNewProfesor,
    editProfesor,
    deleteProfesor
}