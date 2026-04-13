/*Definir una función que se llame Calculadora, que reciba un array de números, y
una callback.
A) Pasarle por argumento una función arrow que realice la suma de los elemtos
del array.
B) Pasarle por argumento una función arrow que realice la resta de los elementos
del array.
C) Pasarle por argumento una función arrow que realice la multiplicación de los
elementos.*/

function Calculadora(array,callback){
    return callback(array)
}
const Sumar=(array)=>{
    let total=0
    array.forEach((num) => {total=total+num})
    return total
}
const Restar=(array)=>{
    let total=0
    array.forEach((num) => {total=total-num})//duda
    return total
}
const Multiplicar=(array)=>{
    let total=1
    array.forEach((num) => {total=total*num})
    return total
}
let arrayNumeros=[1,2,3]

console.log(`El resultado de la suma es: `,Calculadora(arrayNumeros,Sumar))
console.log(`El resultado de la resta es: `,Calculadora(arrayNumeros,Restar))
console.log(`El resultado de la multiplicacion es: `,Calculadora(arrayNumeros,Multiplicar))

/* Definir una función llamada agregarSiEstaEntreCeroYDiez, que reciba un número,
y un array, la función debe validar si el número es mayor o igual a cero y menor o
igual a 10, en caso favorable, debe agregarlo en la primera posición del array, caso
contrario debe arrojar un error informando que el número es mayor o menor a lo
establecido. Debe retornar el array con el resultado. */

function agregarSiEstaEntreCeroYDiez(num,array){
    if (num>=0 && num<=10 ) {
        array.unshift(num)
        return array
    }
    else{
        return (`ERROR el numero es mayor o menor a lo establecido`)
    }
}

let arrayUnshift=[1,2,3]
console.log(agregarSiEstaEntreCeroYDiez(1,arrayUnshift))
console.log(agregarSiEstaEntreCeroYDiez(2,arrayUnshift))
console.log(agregarSiEstaEntreCeroYDiez(11,arrayUnshift))

/* Definir una función similar a la del punto 2, pero que en vez de un número reciba
un array con números y valide si cada uno de los elementos cumple con la condición 
de estar entre cero y diez, debe retornar un array con los números que cumplan la función */

function filtrarArray(array){
    return array.filter(num=>num>=0 && num<=10)
}

let arrayFilter=[11,10,9,2,1,0,-1]
console.log(`Array filtrado:`,filtrarArray(arrayFilter))

/* Definir una función que reciba tres parámetros, algo, y
dos callbacks, que internamente las ejecute y realice algún procedimiento */

function fCallback(num,callback1,callback2) {
    let resultado1=callback1(num)
    let resultado2=callback2(num)
    
    console.log (`El numero ${num} ${resultado1} y ${resultado2}`)
}
const esPrimo = (num) => {
    for (let i = 2; i < num; i++) {
        if (num %i== 0) {
            return `no es primo`
        }
    }
    return `es primo`
}
const esPar= (num)=>{
    if (num%2==0) {
        return `es par`
    }
    else{
        return `es impar`
    }
}
fCallback(7,esPrimo,esPar)
fCallback(2,esPrimo,esPar)
fCallback(4,esPrimo,esPar)

/* Realizar una función que se llame validarIngreso, que reciba una edad, y una
callback. Esta función debe validar por medio de un operador ternario si puede
intregar o no (la condición es que sea mayor a 18 años). El resultado del operador
ternario de debe pasar como argumento a la ejecución de la callback. (Podes
elegir que hacer con la función callback que le vas a pasar por agumento a la
función validarIngreso) */

function validarIngreso(edad,callback){
    let resultado = edad>=18? true : false
    callback(resultado,edad)
}
const mensaje=(resultado,edad)=>{
    if (resultado) {
        console.log(`Es mayor de edad, puede ingresar`)
    } else {
        console.log(`No es mayor de edad, debe esperar ${18-edad} año/s para ingresar`)
    }
}

validarIngreso(2,mensaje)