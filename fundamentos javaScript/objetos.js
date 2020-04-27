
const persona = {
    nombre : 'homer',
    apellido : 'lopez',
    profesion : 'programador',
    edad : 26,
    hobbies : ['entrenar', 'codear', 'disfrutar'],
    hogar : {
        ciudad : 'Lima',
        pais : 'Perú'
    },
    nacimiento : function(edad){
        return new Date().getFullYear() - this.edad;
    }
}

console.log(persona)


html = `
        <ul>
            <li>Nombre:    ${persona.nombre}</li>
            <li>Apellido:  ${persona.apellido}</li>
            <li>Profesión: ${persona.profesion}</li>
            <li>Edad:      ${persona.edad}</li>
            <li>Hobies:    ${persona.hobbies}</li>
            <li>Ciudad:    ${persona.hogar.ciudad}</li>
            <li>País:      ${persona.hogar.pais}</li>
            <li>Nacimiento:${persona.nacimiento()}</li>
        </ul>`;

    document.getElementById('app').innerHTML = html;


/************************************************************************************************
****************************************   ARREGLO DE OBJETOS    *******************************
*************************************************************************************************/


const autos = [
    {modelo: 'Mustang',
    motor:  '6.8'
    },
    {modelo: 'Camaro',
    motor:  '8.8'
    },
    {modelo: 'Toyota',
    motor:  '2.8'
    }
];


/*
for(let i = 0; i < autos.length; i++){

    console.log(`${autos[i].modelo} ${autos[i].motor}`);
}
*/

autos[0].modelo = 'Nissan'

console.log(autos);