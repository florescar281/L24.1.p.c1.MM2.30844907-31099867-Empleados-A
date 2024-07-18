export default class Cl_Empleado {
    constructor (n, s, c) {
        this.nombre = n;
        this.sueldo = s;
        this.cargo = c;
    }

    set nombre (n) {
        this._nombre = n;
    }

    get nombre () {
        return this._nombre;
    }

    set sueldo (s) {
        this._sueldo = s;
    }   

    get sueldo () {
        return this._sueldo;
    }

    set cargo (c) {
        this._cargo = c;
    }  

    get cargo () {
        return this._cargo;
    }   
}