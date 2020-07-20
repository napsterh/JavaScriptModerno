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
    setTimeout(function(){
        const descuento = true;
        if(descuento){
            resolve('descuento aplicado');
        }else {
            reject('No se puede aplicar el descuento')
        }
    }, 2000)
});

aplicarDescuento.then(function(resultado) {
    console.log('resolve:',resultado);
}).catch(function(error){
    console.log('reject:',error);
});