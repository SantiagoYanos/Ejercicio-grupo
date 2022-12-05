# Trabajo en grupo

*Objetivo*: Crear un CRUD de alumnos y profesores.

## Grupo

- Mathias Ezequiel Latronico
- Johanna Carolina Padilla
- Santiago Yanosky

## Stack
- Node.js
- Express
- Mongoose

## Documentación

### Instalar las dependencias
```sh
npm install
```

### Iniciar en modo desarrollo
```sh
npm run dev
```

### Iniciar en modo producción
```sh
npm start
```

## Peticiones API en local

### CRUD - Create Read Update Delete (Alumnos)

#### CREATE | POST

`http://localhost:3000/api/v1/alumnos`
```json
//Nuevo Alumno
{
	"name": "Magneto",
	"age": 55,
	"country": "Villa Gesell, Argentina"
}
```
Output

```json
{
	"message": "Alumno creado!",
	"data": {
		"name": "Magneto",
		"age": 55,
		"country": "Villa Gesell, Argentina",
		"_id": "638e62c4c126c3d9c56a1560",
		"createdAt": "2022-12-05T21:29:40.621Z",
		"updatedAt": "2022-12-05T21:29:40.621Z"
	}
}
```
<br />

#### READ | GET

Output

`http://localhost:3000/api/v1/alumnos/:id`

```json
//Obtener Alumno
{
  "message": "Se encontró el Alumno",
  "data": {
    "_id": "62e95bacad75dbab76e8d331",
    "name": "Juan",
    "age": 45,
    "country": "Alemania",
    "createdAt": "2022-08-02T17:15:24.604Z",
    "updatedAt": "2022-08-02T17:15:24.604Z"
  }
}
```

<br />

#### UPDATE | PUT

`http://localhost:3000/api/v1/profesores/:id`
```json
//Datos Actualizados
{
	"name": "Magneto",
	"age": 55,
	"country": "Villa Gesell, Argentina"
}
```

Output

```json
{
	"message": "Alumno editado",
	"data": {
		"acknowledged": true,
		"modifiedCount": 1,
		"upsertedId": null,
		"upsertedCount": 0,
		"matchedCount": 1
	}
}
```
<br />

#### DELETE | DELETE

OutPut

`http://localhost:3000/api/v1/alumnos/:id`
```json
{
	"message": "Alumno eliminado",
	"data": {
		"acknowledged": true,
		"deletedCount": 1
	}
}
```

<br />

### CRUD - Create Read Update Delete (Profesores)

CREATE | POST

`http://localhost:3000/api/v1/profesores`
```json
//Crear profesor
{
	"name": "Profesor X",
	"course": "Unknown",
	"grade": 999
}
```
OutPut
```json
{
	"message": "Profesor creado!",
	"data": {
		"name": "Profesor X",
		"course": "Unknown",
		"grade": 999,
		"_id": "638e6529c126c3d9c56a1565",
		"createdAt": "2022-12-05T21:39:53.685Z",
		"updatedAt": "2022-12-05T21:39:53.685Z"
	}
}
```

<br />

READ | GET

`http://localhost:3000/api/v1/profesores/:id`

Output

```json
//Obtener Profesor
{
	"data": {
		"_id": "638e6529c126c3d9c56a1565",
		"name": "Profesor X",
		"course": "Unknown",
		"grade": 999,
		"createdAt": "2022-12-05T21:39:53.685Z",
		"updatedAt": "2022-12-05T21:39:53.685Z"
	}
}
```

<br />

UPDATE | PUT

`http://localhost:3000/api/v1/profesores/:id`

```json
//Datos Actualizados
{
	"name": "Profesor X",
	"course": "Mutant Teacher",
	"grade": 100
}
```

Output
```json
{
	"message": "Profesor editado",
	"data": {
		"acknowledged": true,
		"modifiedCount": 1,
		"upsertedId": null,
		"upsertedCount": 0,
		"matchedCount": 1
	}
}
```
<br />

#### DELETE | DELETE

OutPut

`http://localhost:3000/api/v1/profesores/:id`
```json
{
	"message": "Profesor eliminado",
	"data": {
		"acknowledged": true,
		"deletedCount": 1
	}
}
```

