const mongoose = require('mongoose')

const {alumnoSchema, profesorSchema} = require('../schemas/schemas.js')

const AlumnoModel = mongoose.model("alumnos", alumnoSchema)
const ProfesorModel = mongoose.model("profesores", profesorSchema)

module.exports={
    AlumnoModel,
    ProfesorModel
}