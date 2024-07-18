export default class Cl_Empresa {
    constructor () {
        this.menos = Infinity;
        this.auxNombre = '';
        this.acumSueldos = 0;
        this.contEmpleadosAdministrativo = 0;
    }

    procesarEmpleados(e) {
        if(e.sueldo < this.menos) {
            this.menos = e.sueldo;
            this.auxNombre = e.nombre;
        }

        if(e.cargo == 'administrativo') {
            this.acumSueldos += e.sueldo;
            this.contEmpleadosAdministrativo++;
        }
    }

    mostrarMenorPagado() {
        return this.auxNombre;
    }

    mostrarPromedioPagado() {
        return this.acumSueldos / this.contEmpleadosAdministrativo;
    }

}