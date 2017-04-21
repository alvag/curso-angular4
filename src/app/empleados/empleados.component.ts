import { Component } from '@angular/core';
import { Empleado } from './empleado';

@Component({    
    selector: 'empleados',
    templateUrl: './empleados.component.html'
})
export class EmpleadosComponent  {

    public titulo = "Componente Empleados";
    public empleado:Empleado;
    public trabajadores:Array<Empleado>;

    constructor(){
        this.empleado = new Empleado('Max Alva', 32, 'Cocinero', true);
        this.trabajadores = [
            new Empleado('Max Alva 1', 31, 'Cocinero', true),
            new Empleado('Max Alva 2', 32, 'Cocinero', true),
            new Empleado('Max Alva 3', 33, 'Cocinero', true)
        ];
    }

    ngOnInit(){
        console.log(this.trabajadores);
    }

}