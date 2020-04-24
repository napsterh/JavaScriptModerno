/************************************************************************************************
****************************************   RECORRER UN ARREGLO CON FOREACH     ******************
*************************************************************************************************/

const pendientes = ['Tarea','Comer','Proyecto','Aprender','JavaScript'];

//For
for(let i = 0; i < pendientes.length; i++){
    console.log(pendientes[i]);
}


/************************************************************************************************
***************************************     foreach       ****************************************
*************************************************************************************************/

pendientes.forEach( function (pendiente, index) {
    console.log(`${index}: ${pendiente}`);
});



/************************************************************************************************
*****************************  MAP PARA RECORRER UN ARREGLO DE OBJETOS         ******************
*************************************************************************************************/


const carrito = [
    {   id : 1,
        producto : 'Libro',
        cantidad : 20},
    {   id : 2,
        producto : 'Camisa',
        cantidad : 10},
    {   id : 3,
        producto : 'Guitarra',
        cantidad : 45},
    {   id : 4,
        producto : 'Disco',
        cantidad : 78}
];

const nombreProducto = carrito.map( function(carrito) {
    return carrito.producto;
});

console.log(nombreProducto);


/************************************************************************************************
**************************          IMPRIMIR OBJETOS CON FOR           **************************
*************************************************************************************************/


const automovil = {
    modelo: 'camaro',
    motor: 6.1,
    anio: 1986,
    marca: 'chevrolet'
}

for( let auto in automovil ){
    console.log(`${auto} : ${automovil[auto]}`);
}


console.log(automovil);