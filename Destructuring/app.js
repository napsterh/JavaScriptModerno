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


const cliente = {
    nombre : 'Homer',
    tipo : 'premium'
}

let { nombre, tipo, saldo=0 } = cliente;

console.log(nombre);
console.log(tipo);
console.log(saldo);

*/


//Destructuring forma anterior

function reservacion(completo,
        {
            metodoPago = 'efectivo',
            cantidad = 0,
            dias = 0
        } = {}
    )
    {
        if(completo) {
            console.log(metodoPago)
            console.log(cantidad)
            console.log(dias)
        }else {
            console.log('Cancelar')
        }
    }


//
reservacion(
    true,
    {
        metodoPago : 'credito',
        cantidad : 2000,
        dias : 3
    }
);
































