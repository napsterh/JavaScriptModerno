/*
class Clientes {
    constructor(nombre, apellido, saldo){
        this.nombresito = nombre;
        this.apellidito = apellido;
        this.saldito = saldo;
    }

    imprimirSaldo(){
        return ` Hola ${this.nombresito}, tu saldo es de ${this.saldito} `;
    }

    tipoCliente(){
        let tipo;
        if(this.saldito > 10000){
            tipo = 'Gold';
        }else if(this.saldito > 5000){
            tipo = 'Platinium';
        }else {
            tipo = 'Normal';
        }
        return tipo;
    }

    retirarSaldo(retiro){
        return this.saldito -=  retiro;
    }

    //Atributo estaticos no necesitan instanciarse
    static bienvenido() {
        return `Bienvenido al cajero`;
    }


}

const maria = new Clientes('Maria', 'Perez', 100000);
maria.retirarSaldo(4000);


console.log( Clientes.bienvenido() );

*/

class Clientes {
    constructor(nombre, saldo){
        this.nombresito = nombre;
        this.saldito = saldo;
    }

    imprimirSaldo(){
        return ` Hola ${this.nombresito}, tu saldo es de ${this.saldito} `;
    }

    //Atributo estaticos no necesitan instanciarse
    static bienvenido() {
        return `Bienvenido al cajero`;
    }


}

const cliente1 = new Clientes('Homer', 100);

class Empresa extends Clientes {
    constructor(nombre, saldo, telefono, tipo){
        //va hacia el conctructor padre
        super(nombre, saldo);
        //no existen el constructor padre
        this.telefonito = telefono;
        this.tipito = tipo;
    }
}

const empresa = new Empresa('empresa1', 1000, 1238461864, 'Construccion');

console.log(empresa);
console.log(empresa.imprimirSaldo());
console.log(cliente1.imprimirSaldo());
