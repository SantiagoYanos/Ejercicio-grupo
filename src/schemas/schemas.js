const mongoose = require('mongoose')

const alumnoSchema = mongoose.Schema({
    name: String,
    age: Number,
    country: String
}, {versionKey: false, timestamps:true}) //Agregado el timestamp (tiempo de creación y actualización)

const profesorSchema = mongoose.Schema({
    name: String,
    course: String, //materia
    grade: Number
}, {versionKey: false, timestamps:true})

module.exports={
    alumnoSchema,
    profesorSchema
}