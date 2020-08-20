/*
const cliente = {
    tipo : 'Premium',
    nombre : 'Homer',
    datos : {
        ubicacion : {
            ciudad : 'Lima',
            pais : 'Perú'
        },
        cuenta : {
            desde : '10-12-2012',
            saldo : 4000
        }
    }
}

let { datos: { cuenta } } = cliente;
console.log(cuenta.desde);
console.log(cuenta.saldo);
*/

const cliente = {
    nombre : 'Homer',
    tipo : 'premium'
}

let { nombre, tipo, saldo=0 } = cliente;

console.log(nombre);
console.log(tipo);
console.log(saldo);