import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing, appRoutingProvider } from './app.routing';

import { AppComponent } from './app.Component';
import { FrutaComponent } from './fruta/fruta.Component';
import { EmpleadosComponent } from './empleados/empleados.component';
import { HomeComponent } from './home/home.component';
import { ContactoComponent } from './contacto/Contacto.component';

@NgModule({
  declarations: [
    AppComponent,
    FrutaComponent,
    EmpleadosComponent,
    HomeComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [appRoutingProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
