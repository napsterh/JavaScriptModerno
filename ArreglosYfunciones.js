const producto1 = 'Pizza',
      precio1 = 30,
      producto2 = 'Hamburguesa',
      precio2 = 40;



      let html;
    
      html = '<ul>' +
             '<li>Orden ' + producto1 +'</li>' +
             '<li>Orden ' + precio1 +'</li>' +
             '<li>Orden ' + producto2 +'</li>' +
             '<li>Orden ' + precio2 +'</li>' +
             '<li>Total ' + (precio1 + precio2) +'</li>' +
             '</ul>';

             document.getElementById('app').innerHTML = html;
    


    html = `
        <ul>
            <li>Orden: ${producto1}</li>
            <li>Orden: ${precio1}</li>
            <li>Orden: ${producto2}</li>
            <li>Orden: ${precio2}</li>
            <li>Orden: ${total(precio1, precio2)}</li>
        </ul>`;

    function total(precio1, precio2){
        return precio1 + precio2;
    }

    document.getElementById('app').innerHTML = html;



const numeros = [12,45,78,23,56,45];
//console.log(numeros);

const mezclado = ["string", 12, true, null, true, undefined];
//console.log(mezclado);

const meses = new Array('Enero', 'Febrero', 'Marzo', 'Abril');
//console.log(meses);

//ubicacion de acuerdo al  indice

console.log(meses.indexOf('Junio'));

//Añadir al final de un arrglo
meses[4] = 'Mayo'
meses.push('Junio');

//añadir al inicio
meses.unshift("Mes 0")

//console.log(meses);

//eliminar un elemntyo de un arreglo (ultimo)

meses.pop();


//eliminar un elemntyo de un arreglo (primero)
meses.shift();

//quiter un rango splice(a partir del elemento, hasta los siguientes x elementos)
meses.splice(2, 1);
//revertir
meses.reverse();


//unir arreglos

let arr1 = [1,2,3],
    arr2 = [7,8,9];

// Ordenar un arreglo

const frutas = ['Fresa','Platano','Manzana','Arandano','Naranja','Zanahoria'];

frutas.sort();
//console.log(frutas);

//ordenar numeros

arr1 = [23,3,4,45,65,453,45,657,76,6,56,56,78,79];

arr1.sort(function(x, y){
    return x-y;
});

console.log(arr1);