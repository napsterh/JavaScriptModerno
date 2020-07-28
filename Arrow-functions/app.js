
let aprendiendo;


aprendiendo = function(){
    console.log('Aprendiendo JavaScript');
}

aprendiendo = () => {
    console.log('Aprendiendo JavaScript con arrow Functions');
}

//Una funcion de una sola linea no requiere  llave
aprendiendo = () => console.log('funcion en una sola linea');

//Retorna un objeto
aprendiendo = () => ({ aprendiendo: 'objeto a mostrar' });

//Pasar 1 parametro
aprendiendo = tecnologia => console.log(`Aprendiendo ${tecnologia}`);

//Pasar 2 parametros
aprendiendo = (tec1,tec2) => console.log(`Aprendiendo ${tec1} y ${tec2}`);


const productos = ['disco', 'camisa', 'guitarra'];

/*const letrasProducto = productos.map(function(producto) {
    return producto.length;
});

const letrasProducto = productos.map(producto => {
    return producto.length;
});
const letrasProducto = productos.map(producto => producto.length)


productos.forEach(producto =>  {
    console.log(producto);
})
*/
productos.forEach(producto =>  console.log(producto));
