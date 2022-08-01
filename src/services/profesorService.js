const profesores = require('../database/profesores.js')

function getAllProfesores()
{
    return profesores.getAllProfesores()
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