let colors = require(`colors`)
let alumno = {
    nombre: `Gabriel`,
    edad: 21,
    inscriptoAMaterias: [`lengua`, `matematica`],
    debeCorrelativa: false
}
function validarCorrelativa(alumno) {
    console.log(`----Validando correlativas----`.yellow)
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if (!alumno.debeCorrelativa) {
                resolve(`Puede inscribirse`.green)
            }
            else {
                reject(`Debe correlativa`.red)
            }
        },2000)
    })
}
function inscripcionMateria(alumno, materia) {
    console.log(`----Inscribiendo a materia----`.yellow)
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            alumno.inscriptoAMaterias.push(materia)
            resolve(`Inscripcion a ${materia} completada`.green)
        },5000)
    })
}
function ejecutarValidarInscribir(){
    
    validarCorrelativa(alumno)
    .then(response => {
        console.log(response)
        return inscripcionMateria(alumno, `ingles`)
    })
    .then(response => {
        console.log(`----INSCRIPCION EXITOSA----`.green)
        console.log(response)
    })
    .catch(error => {
        console.log(`----NO PUEDE INSCRIBIRSE----`.red)
        console.log(error)
    })
    .finally(end=>{
        console.log(`----FINALIZO LA OPERACION----`.yellow)
    })
}
module.exports = { ejecutarValidarInscribir}