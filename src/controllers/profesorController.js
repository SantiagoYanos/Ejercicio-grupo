const profesorService = require('../services/profesorService.js')

const regex = require('../regex/regex.js')

async function getAllProfesores(req,res)
{
    const {skip=0, limit=0} = req.query

    if(regex.characterValidation.test(String(skip)) || regex.characterValidation.test(String(limit)))
    {
        res.status(400).send('ERROR: Número Inválidos')
    }
    else
    {
        const obtenidos = await profesorService.getAllProfesores(skip, limit)
        res.status(200).json({data: obtenidos})
    }

    
}

async function getOneProfesor(req,res)
{
    const id = req.params.id

    if(!id)
    {
        res.status(400).send('ERROR: Error en el ID!')
    }

    const obtenido = await profesorService.getOneProfesor(id)

    res.status(202).json({data: obtenido})
}

async function createNewProfesor(req,res)
{
    const {name, course, grade} = req.body

    try{

    if(!name || !course || !regex.numberValidation.test(String(grade)))
    {
        return res.status(400).send('ERROR: Data missing!')
    }
    
    const newProfesor={
        name,
        course,
        grade
    }

    const created = await profesorService.createNewProfesor(newProfesor)

    res.status(201).json({message:'Profesor creado!', data: created})

    }
    catch(err)
    {
        console.log(err)
    }

   
}

async function editProfesor(req,res)
{
    const {name, course, grade} = req.body

    const id = req.params.id

    if(!id || !name || !course || !grade)
    {
        res.status(400).send('ERROR: Data missing!')
    }

    const editProfesor={
        name,
        course,
        grade
    }

    const edited = await profesorService.editProfesor(id, editProfesor)

    res.status(202).json({message:'Profesor editado', data: edited})
}

async function deleteProfesor(req,res)
{
    const id = req.params.id

    if(!id)
    {
        res.status(400).send('ERROR: ID requerida')
    }

    const deleted = await profesorService.deleteProfesor(id)

    res.status(202).json({message:'Profesor eliminado', data: deleted})
}

module.exports={
    getAllProfesores,
    getOneProfesor,
    createNewProfesor,
    editProfesor,
    deleteProfesor
}