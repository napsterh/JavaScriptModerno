/***********************************************************************************************************
****************************************   FUNCION QUE NO EXISTE   *****************************************
************************************************************************************************************/


try {
    funcionNoExiste();
} catch (err) {
    console.log(err);
}

obtenerClientes();

function obtenerClientes() {
    console.log('Descargando...');

    setTimeout(function() {
        console.log('Completo');
    }, 3000);

}



/***********************************************************************************************************
****************************************   OBJETO DATE       ***********************************************
************************************************************************************************************/


const diaHoy = new Date();

let valor;
//Mes
valor = diaHoy.getMonth();
//Dia
valor = diaHoy.getDate();
valor = diaHoy.getDay();
//Año
valor = diaHoy.getFullYear();
//Minutos
valor = diaHoy.getMinutes();
//Hora
valor = diaHoy.getHours();
//todos milisegundos desde 1970
valor = diaHoy.getTime();
// set : SE USA PARA AÑADIR O MODIFICAR UN DATO
// get : SE USA PARA OBTENER ALGUN DATO
valor = diaHoy.getFullYear();
valor = diaHoy.setFullYear(2019);
valor = diaHoy.getFullYear();

console.log(valor);