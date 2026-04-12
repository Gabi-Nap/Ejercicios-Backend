
/* Crear una función que reciba dos parámetros y retorne un valor */
function promedio(num1,num2){
    return (num1+num2)/2
}

/* Crear una función que se llame calcularAreaCuadrado que reciba un parámetro que sea el
lado del cuadrado, calcule el área y la retorne */

function calcularAreaCuadrado(lado){
    return lado*lado
}

/* Crear una funcion por declaracion*/

function resta(num1,num2){
    console.log(`La resta de ${num1} - ${num2} es: ${num1-num2}`)
}
resta(10,5)

/* Crear una función lambda por expresión que se llame autosuma, recibe un parámetro que
es un array de números y retorna la suma del total de los números (utilizar foreach para
recorrer el array) */

const autosuma = function(arrayNum){
    let suma=0
    arrayNum.forEach((num)=>{suma=suma+num})
    return suma
}

let array=[1,4,3]
console.log(`El valor de la suma de los elementos es: ${autosuma(array)}`)

/* Crear una función flecha (arrow function) que reciba un nombre, el año de nacimiento, y
retorne un string que diga: “Hola -nombre- este año tenes o cumplis -numero- años” */

const calcularEdad = (nombre,anio)=>{
    let edad=2026-anio
    console.log(`Hola ${nombre} este año tenes o cumplis: ${edad} años`)
}
calcularEdad(`Pepe`,2004)

/* crear una función lambda que se llame inscribirAlumno, que reciba un array de alumnos y
un nombre, que agregue al alumno en la ultima posición del array */

const agregarAlumno= function(arrayAlumno,alumno){
    arrayAlumno.push(alumno)
    return arrayAlumno
}

let arrayAlum=[`jose`,`pedro`]
console.log(`Lista completa de alumnos: ${agregarAlumno(arrayAlum,`pepe`)}`)

/* Crear una función que se llame buscador, que reciba un array con nombres de alumnos y un
nobre a buscar, y diga si encuentra el nombre en la lista. */
function buscador(arrayAlumno,alumno){
    console.log(arrayAlumno.indexOf(alumno)===-1?`Alumno no encontrado`: `El alumno ${alumno} se encontro en la lista`)
}
let arrayAlumnos=[`jose`,`pedro`,`pablo`,`tobias`,`sergio`]
buscador(arrayAlumnos,`jose`)