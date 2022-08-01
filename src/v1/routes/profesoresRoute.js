const express = require('express')
const router = express.Router()

const profesorController=require('../../controllers/profesorController')

router
    .get('/', profesorController.getAllProfesores)
    .get('/:id', profesorController.getOneProfesor)
    .post('/', profesorController.createNewProfesor)
    .put('/:id', profesorController.editProfesor)
    .delete('/:id', profesorController.deleteProfesor)

module.exports=router