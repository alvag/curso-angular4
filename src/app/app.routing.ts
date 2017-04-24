import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//importar componentes
import { EmpleadosComponent } from './empleados/empleados.component';
import { FrutaComponent } from './fruta/fruta.Component';
import { HomeComponent } from './home/home.component';
import {ContactoComponent } from './contacto/Contacto.component';

const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'empleado', component: EmpleadosComponent},
    {path: 'fruta', component: FrutaComponent},
    {path: 'contacto', component: ContactoComponent},
    {path: 'contacto/:page', component: ContactoComponent},
    {path: '**', component: HomeComponent}
];

export const appRoutingProvider: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);