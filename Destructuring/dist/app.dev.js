"use strict";

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
function reservacion(completo) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$metodoPago = _ref.metodoPago,
      metodoPago = _ref$metodoPago === void 0 ? 'efectivo' : _ref$metodoPago,
      _ref$cantidad = _ref.cantidad,
      cantidad = _ref$cantidad === void 0 ? 0 : _ref$cantidad,
      _ref$dias = _ref.dias,
      dias = _ref$dias === void 0 ? 0 : _ref$dias;

  if (completo) {
    console.log(metodoPago);
    console.log(cantidad);
    console.log(dias);
  } else {
    console.log('Cancelar');
  }
} //


reservacion(true, {
  metodoPago: 'credito',
  cantidad: 2000,
  dias: 3
});