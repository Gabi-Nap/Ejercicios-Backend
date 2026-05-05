let colors = require(`colors`)

let prod1 = {
    id:1,
    nombreProducto:`lapiz`,
    precio:10,
    stock:10
}
let prod2 = {
    id:2,
    nombreProducto:`hoja`,
    precio:5,
    stock:20
}
let prod3 = {
    id:3,
    nombreProducto:`lapicera`,
    precio:15,
    stock:20
}
let prod4 = {
    id:4,
    nombreProducto:`goma`,
    precio:5,
    stock:30
}
let prod5 = {
    id:5,
    nombreProducto:`sacapuntas`,
    precio:5,
    stock:30
}

let productos=[prod1,prod2,prod3,prod4,prod5]

function validarStock(busquedaProducto, productos) {
    console.log(`----Validando stock----`.yellow)
    return new Promise((resolve, reject) => {
        let producto = productos.find((element)=>{
            return element.nombreProducto===busquedaProducto
        })
        setTimeout(() => {
            if (producto!=undefined) {
                console.log(`producto encontrado`.yellow)
                resolve(producto)
            } else {
                reject(`producto no encontrado`.red)
            }
        }, 2000)
    })
}
function realizarVenta(producto) {
    console.log(`Realizando venta`.yellow)

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            producto.stock = producto.stock - 1
            resolve(`Venta realizada - Stock actualizado de producto ${producto.nombreProducto}: ${producto.stock}`.green)
        }, 1000)
    })
}
function generarEtiqueta(nombreProducto) {
    console.log(`Generando etiqueta`.yellow)

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Etiqueta generada de ${nombreProducto}`.green)
        },4000)
    })
}
function ejecutarCompraProducto() {
    productoAComprar=`hoja`
    validarStock(productoAComprar,productos)
    .then(response=>{
        productoAComprar=response
        return realizarVenta(response)
    })
    .then(response=>{
        console.log(response)
        return generarEtiqueta(productoAComprar.nombreProducto)
    })
    .then(response=>{
        console.log(response)
    })
    .catch(error=>{
        console.log(error)
    })
    .finally(end=>{
        console.log(`----FINALIZO LA OPERACION----`.yellow)
    })
}
    module.exports = {ejecutarCompraProducto}