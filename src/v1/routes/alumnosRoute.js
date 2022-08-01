const express=require('express')
const router=express.Router()

const alumnoController=require('../../controllers/alumnoController.js')

router
    .get('/', alumnoController.getAllAlumnos)
    .get('/:id', alumnoController.getOneAlumno)
    .post('/', alumnoController.createNewAlumno)
    .put('/:id', alumnoController.editAlumno)
    .delete('/:id', alumnoController.deleteAlumno)

module.exports=router