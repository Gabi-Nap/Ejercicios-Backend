let colors = require(`colors`)
let saldo = 100
let importe = 50

function validarSaldo(importe) {
    return new Promise((resolve, reject) => {
        console.log(`----Validando saldo----`.yellow)
        setTimeout(()=>{
            if (importe <= saldo) {
                resolve(`Saldo suficiente`.green)
            }
            else {
                reject(`Saldo Insuficiente`.red)
            }
        },5000)
    })
}

function realizarTransferencia(importe) {
    return new Promise((resolve, reject) => {
        console.log(`----Realizando transferencia----`.yellow)
        setTimeout(()=>{
            saldo = saldo - importe
            resolve(`Dinero transferido - nuevo saldo: ${saldo}`.green)
        },10000)
    })
}

validarSaldo(importe)
    .then(response => {
        console.log(response)
        return realizarTransferencia(importe)
    })
    .then(response => {
        console.log(`----OPERACION EXITOSA----`.green)
        console.log(response)
    })
    .catch(error => {
        console.log(`----ERROR----`.red)
        console.log(error)
    })
    .finally(end=>{
        console.log(`----FINALIZO LA OPERACION----`.yellow)
    })

module.exports = { realizarTransferencia, validarSaldo }