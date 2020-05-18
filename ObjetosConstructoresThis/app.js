// Object literal
/*
const cliente = {
    nombre : 'Homer',
    saldo : 600,
    tipoCliente : function() {
        let tipo;

        if(this.saldo > 1000){
            tipo = 'Gold';
        }else if(this.saldo > 500){
            tipo = 'platinium';
        }else {
            tipo = 'Normal';
        }

        return tipo;
    }
}

console.log(cliente.tipoCliente());

// metodo alternativo

function Cliente(nombre, saldo){
    this.nombre = nombre;
    this.saldo = saldo;
    this.tipoCliente = function(){
        let tipo;

        if(this.saldo > 1000){
            tipo = 'Gold';
        } else if(this.saldo > 500){
            tipo = 'Platinium';
        }else {
            tipo = 'Normal';
        }

        return tipo;
    }
}

const persona = new Cliente('Pedro', 20000);
const persona2 = new Cliente('Maria', 501);

console.log(persona2.tipoCliente());




// String

const nombre1 = 'Pedro';
const nombre2 = new String('Pedro');

console.log(typeof nombre2);


//Numeros

const num1 = 20;
const num2 = new Number(20);



//Arreglos
const arreglo1 = [1,2,3,4];
const arreglo2 = new Array(1,2,3,4);

console.log(arreglo1);
console.log(arreglo2);


// Boolean
const boolean1 = true;
const boolean2 = new Boolean(true);


*/


//

function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;

}

//Crear un prototype
Cliente.prototype.tipoCliente = function () {
    let tipo;
    if (this.saldo > 1000) {
        tipo = 'Gold';
    } else if (this.saldo > 500) {
        tipo = 'Platinium';
    } else {
        tipo = 'normal';
    }
    return tipo;
}

//Prototipo que imprime saldo y nombre
Cliente.prototype.nombreClienteSaldo = function () {
    return `Nombre: ${this.nombre}, tu saldo es de ${this.saldo},
    Tipo de Cliente ${this.tipoCliente()} `;
}


//Prototype retirar saldo
Cliente.prototype.retiroSaldo = function(retiro) {
    return this.saldo -= retiro;
}



const cliente1 = new Cliente('Homer', 100);
const cliente2 = new Cliente('Juan', 600);
const cliente3 = new Cliente('Maria', 1200);

cliente2.retiroSaldo(300);



console.log(cliente1.nombreClienteSaldo());
console.log(cliente2.nombreClienteSaldo());
console.log(cliente3.nombreClienteSaldo());

