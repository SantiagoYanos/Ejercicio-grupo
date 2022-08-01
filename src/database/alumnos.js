const {AlumnoModel} = require('../models/models.js')

//Obtener alumnos
async function getAllAlumnos(skip,limit)
{
    const alumnos = await AlumnoModel.find().skip(skip).limit(limit)
    return alumnos
}

async function getOneAlumno(id)
{
    return await AlumnoModel.findById(id)
}

async function createNewAlumno(newAlumno)
{
    const alumno = new AlumnoModel(newAlumno)
    const created= await alumno.save()

    return created
}

async function editAlumno(id, newAlumno)
{
    return await AlumnoModel.updateOne({_id: id}, {
        $set : newAlumno
    })
}

async function deleteAlumno(id)
{
    return await AlumnoModel.deleteOne({_id: id})
}

module.exports={
    getAllAlumnos,
    getOneAlumno,
    createNewAlumno,
    editAlumno,
    deleteAlumno
}

