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
    public trabajador_externo:boolean;
    public color:string;
    public color_seleccionado:string;

    constructor(){
        this.empleado = new Empleado('Max Alva', 32, 'Cocinero', false);
        this.trabajadores = [
            new Empleado('Max Alva 1', 30, 'Albañil', true),
            new Empleado('Max Alva 2', 32, 'Cocinero', false),
            new Empleado('Max Alva 3', 33, 'Profesor', true)
        ];

        this.trabajador_externo = true;
        this.color = 'red';
        this.color_seleccionado = '#CCC';
    }

    ngOnInit(){
        console.log(this.trabajadores);
    }

    cambiarExterno(valor){
        this.trabajador_externo = valor;
    }

}