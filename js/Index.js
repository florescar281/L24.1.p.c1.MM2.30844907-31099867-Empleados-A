/*
EMPLEADOS-A
En una empresa se tiene personal obrero y personal administrativo. 
La empresa necesita determinar cuál es alguno de los nombres del personal 
que gana menos (si no se repite, sólo reportar 1, si se repite, reportar cualquiera) 
y también el monto promedio pagado sólo los administrativos.
Al ser consultada por la forma como desean que se presente la salida, 
la empresa suministra el siguiente formato, informando que Juan (obrero) 
actualmente gana $100, Ana (obrero) gana $50, Lin (administrativo) gana $200, 
Mary (obrero) gana $50 y Carlos (administrativo) gana $150:
Uno de los que gana menos: Mary
Monto promedio pagado a administrativos: $175
*/

import Cl_Empresa from './Cl_Empresa.js';
import Cl_Empleado from './Cl_Empleado.js';

const salida = document.getElementById('salida');

let empresa = new Cl_Empresa();

let emple1 = new Cl_Empleado('Juan', 100, 'obrero');
let emple2 = new Cl_Empleado('Ana', 50, 'obrero');
let emple3 = new Cl_Empleado('Lin', 200, 'administrativo');
let emple4 = new Cl_Empleado('Mary', 50, 'obrero');
let emple5 = new Cl_Empleado('Carlos', 150, 'administrativo');

empresa.procesarEmpleados(emple1);
empresa.procesarEmpleados(emple2);
empresa.procesarEmpleados(emple3);
empresa.procesarEmpleados(emple4);
empresa.procesarEmpleados(emple5);

salida.innerHTML = `
    Uno de los que gana menos: ${empresa.mostrarMenorPagado()}
    <br>Monto promedio pagado a administrativos: ${empresa.mostrarPromedioPagado()}$; 
`