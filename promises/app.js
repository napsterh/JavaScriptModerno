//Promises
/*
const waiting = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve('Se ejecutó');
    }, 5000);
});

//
waiting.then(function(mensaje){
    console.log(mensaje);
})
*/

const aplicarDescuento = new Promise(function(resolve, reject) {
    const descuento = false;
    if(descuento){
        resolve('descuento aplicado');
    }else {
        reject('No se puede aplicar el descuento')
    }
});

aplicarDescuento.then(function(resultado) {
    console.log(resultado);
}).catch(function(error){
    console.log('No se puede aplicar el descuento');
});