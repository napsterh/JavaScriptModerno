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