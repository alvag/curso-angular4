import { Component } from '@angular/core';
import { Coche } from './coche';
import { PeticionesService } from '../services/peticiones.Service';

@Component({    
    selector: 'coches',
    templateUrl: 'coches.component.html',
    providers: [PeticionesService]
})

export class CochesComponent {

    public coche:Coche;    
    public coches:Array<Coche>;
    public articulos;

    constructor(
        private _peticionesService:PeticionesService
    ) { 
        this.coche = new Coche("", "", "");
        this.coches = [
            new Coche("Coche 1", "100", "rojo"),
            new Coche("Coche 2", "150", "azul"),
        ];
    }

    ngOnInit() { 
        this._peticionesService.getArticulos().subscribe(
            result => {
                this.articulos = result;
                console.log(result);

                if(!this.articulos){
                    console.log("Error en el servidor");
                }

            }, error => {
                var err = <any>error;
                console.log(err);
            }
        );

    }

    onSubmit(){
        console.log(this.coche);
    }

}