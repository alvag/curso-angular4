import { Component } from '@angular/core';
import { RopaService } from '../services/ropa.service';

@Component({    
    selector: 'home',
    templateUrl: 'home.component.html',
    providers: [RopaService]
})
export class HomeComponent  {

    public titulo = 'Página Principal';
    public listado_ropa:Array<String>;
    public prenda_a_guardar:String;
    public fecha;
    
    constructor(
       private _ropaService: RopaService       
    ) {
        this.fecha = new Date();
     }

    ngOnInit() { 
        this.listado_ropa = this._ropaService.getRopa();
        console.log(this.listado_ropa);
    }

    addRopa(){
        this._ropaService.addRopa(this.prenda_a_guardar);
        this.prenda_a_guardar = null;
    }

    eliminarPrenda(indice:number){
        this._ropaService.deleteRopa(indice);        
    }

}