import { Component } from '@angular/core';
import { Coche } from './coche';

@Component({    
    selector: 'coches',
    templateUrl: 'coches.component.html'
})

export class CochesComponent {

    public coche:Coche;    
    public coches:Array<Coche>;

    constructor() { 
        this.coche = new Coche("", "", "");
        this.coches = [
            new Coche("Coche 1", "100", "rojo"),
            new Coche("Coche 2", "150", "azul"),
        ];
    }

    ngOnInit() { 

    }

    onSubmit(){
        console.log(this.coche);
    }

}