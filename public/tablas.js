const alumnosUrl = "http://localhost:3000/api/v1/alumnos"

const profesoresUrl = "http://localhost:3000/api/v1/profesores"

fetch(alumnosUrl)
    .then(response => response.json())
    .then(({ data }) => {
        renderAlumnos(data)
    })
    .catch(err => {
        console.log(err)
    })

fetch(profesoresUrl)
.then(response => response.json())
.then(({data}) => {
    renderProfesores(data)
})
.catch(err => {
    console.log(err)
})

function renderAlumnos(data) {
    const alumnos = document.getElementById('renderAlumnos')

    alumnos.innerHTML = '<ol>'

    data.forEach(alumno => {
        alumnos.innerHTML += `<li>Nombre: ${alumno.name}, Edad: ${alumno.age}, País: ${alumno.country}</li>`
    });

    alumnos.innerHTML += '</ol>'
}

function renderProfesores(data){
    const profesores = document.getElementById('renderProfesores')

    profesores.innerHTML = '<ol>'

    data.forEach(profesor => {
        profesores.innerHTML += `<li>Nombre: ${profesor.name}, Materia: ${profesor.course}, Grado: ${profesor.grade}`
    })

    profesores.innerHTML += '</ol>'
}