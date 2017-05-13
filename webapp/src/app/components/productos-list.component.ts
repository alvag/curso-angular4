import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProductoService } from '../services/producto.service'
import { Producto } from '../models/producto';

@Component({	
	selector: 'productos-list',
	templateUrl: '../views/productos-list.html',
	providers: [ProductoService]
})
export class ProductosListComponent {

	public titulo:string;
	public productos:Producto[];
	public productId;

	constructor(
		private _route: ActivatedRoute,
		private _router: Router,
		private _prodcutoService: ProductoService
		) {
		
		this.titulo = 'Listado de Productos';

	}

	ngOnInit() {
		console.log('producto- list componente cargado');
		
		this.getProductos();
	}

	getProductos(){
		this._prodcutoService.getProductos().subscribe(
			result =>{
				console.log(result);
				this.productos = result;
			},
			error =>{
				console.log(<any>error);
			}
		);
	}

	deleteConfirm(id){
		this.productId = id;
	}

	cancelConfirm(){
		this.productId = null;
	}

	deleteProducto(id){
		this._prodcutoService.deleteProducto(id).subscribe(
			response =>{
				if (response.code == 200) {
					this.getProductos();
				}
			}, error =>{
				alert('Errr en el servidor');
			}
		);
	}
}