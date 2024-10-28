class Empleado {
    nombre;
    apellido;
    #edad;

    constructor(nombre, apellido, edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.#edad = edad;
    }

    muestra() {
        alert(this.nombre + " " + this.apellido + " " + this.#edad);
    }

    get edad() {
        return this.#edad;
    }
}

class Profesor extends Empleado {
    cargo;

    constructor(nombre, apellido, edad, cargo) {
        super(nombre, apellido, edad);
        this.cargo = cargo;
    }

    muestrCargo() {
        alert(this.nombre + " " + this.apellido + " " + this.edad + ". Con cargo de: " + this.cargo);
    }
}