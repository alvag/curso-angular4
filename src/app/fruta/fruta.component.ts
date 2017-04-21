import { Component } from '@angular/core';

@Component({    
    selector: 'fruta',
    templateUrl: './fruta.component.html'    
})
export class FrutaComponent {
    
    public nombre_componente = "Componente de fruta";
    public listado_frutas = "Naranja, Manzana, Pera y Sandía";

    public nombre:string = "Max Alva";
    public edad:number = 30;
    public mayorDeEdad:boolean = true;
    public trabajos:Array<string> = ['Carpinero', 'Albañil'];

    comodin:any = 'Cualquier cosa';

    constructor(){
        console.log(this.trabajos);
    }

    ngOnInit(){
        //variables y alcance
        
    }
    
}
