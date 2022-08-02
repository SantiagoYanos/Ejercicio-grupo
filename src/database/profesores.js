const {ProfesorModel} = require('../models/models.js')

//Obtener profesores
async function getAllProfesores(skip, limit)
{
    const profesores = await ProfesorModel.find().skip(skip).limit(limit)
    return profesores
}

async function getOneProfesor(id)
{
    return await ProfesorModel.findById(id)
}

async function createNewProfesor(newProfesor)
{
    const profesor = new ProfesorModel(newProfesor)
    const created= await profesor.save()

    return created
}

async function editProfesor(id, newProfesor)
{
    return await ProfesorModel.updateOne({_id: id}, {
        $set : newProfesor
    })
}

async function deleteProfesor(id)
{
    return await ProfesorModel.deleteOne({_id: id})
}

module.exports={
    getAllProfesores,
    getOneProfesor,
    createNewProfesor,
    editProfesor,
    deleteProfesor
}