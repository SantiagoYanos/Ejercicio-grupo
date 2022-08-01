const alumnoService = require('../services/alumnoService.js')

const regex = require('../regex/regex.js')

async function getAllAlumnos(req,res)
{
    const {skip=0, limit=0} = req.query

    if(regex.characterValidation.test(String(skip)) || regex.characterValidation.test(String(limit)))
    {
        res.status(400).send('ERROR: Números inválidos')
    }
    else
    {
        const obtenidos = await alumnoService.getAllAlumnos(skip,limit)

        res.status(200).json({data: obtenidos})
    }
}

async function getOneAlumno(req,res)
{
    const id = req.params.id

    if(!id)
    {
        res.status(400).send('ERROR: Data missing!')
    }

    const obtenido = await alumnoService.getOneAlumno(id)

    res.status(202).json({message: 'Se encontró el Alumno', data: obtenido})
}

async function createNewAlumno(req,res)
{
    const {name, age, country} = req.body

    if(!name || !age || !country)
    {
        res.status(400).send('ERROR: Data missing!')
    } 

    const newAlumno={
        name,
        age,
        country
    }

    const created = await alumnoService.createNewAlumno(newAlumno)

    res.status(201).json({message:'Alumno creado!', data: created})
}

async function editAlumno(req,res)
{
    const {name, age, country} = req.body

    const id = req.params.id

    if(!id || !name || !age || !country)
    {
        res.status(400).send('ERROR: Data missing!')
    }

    const editAlumno={
        name,
        age,
        country
    }

    const edited = await alumnoService.editAlumno(id, editAlumno)

    res.status(202).json({message:'Alumno editado', data: edited})
}

async function deleteAlumno(req,res)
{
    const id = req.params.id

    if(!id)
    {
        res.status(400).send('ERROR: ID requerida')
    }

    const deleted = await alumnoService.deleteAlumno(id)

    res.status(202).json({message:'Alumno eliminado', data: deleted})
}

module.exports={
    getAllAlumnos,
    createNewAlumno,
    getOneAlumno,
    editAlumno,
    deleteAlumno
}