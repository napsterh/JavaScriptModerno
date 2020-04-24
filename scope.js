/************************************************************************************************
****************************************         SCOPE        ********************************
*************************************************************************************************/

var a = 'a';
let b = 'b';
const c = 'c';



/************************************************************************************************
****************************************         SCOPE DE LA FUNCION        *********************
*************************************************************************************************/


function functionScope(){
    var a = 'A';
    let b = 'B';
    const c = 'C';
    console.log('FUNCION: '+ a, b, c);
};

functionScope();

//console.log('Globales: '+ a, b, c);


/************************************************************************************************
****************************************         SCOPE DE BLOQUE           *********************
*************************************************************************************************/


if(true){
    var a = 'AA';
    let b = 'BB';
    const c = 'CC';
    console.log('BLOQUE:'+a, b, c);
}


console.log('Globales: '+ a, b, c);