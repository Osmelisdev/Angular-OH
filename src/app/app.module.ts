import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VehiculosComponent } from './paginas/Vehiculos/Vehiculos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CalificacionComponent } from './componentes/calificacion/calificacion/calificacion.component';
import {  HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { VehiculoDetalleComponent } from './paginas/VehiculoDetalle/VehiculoDetalle/VehiculoDetalle.component';
import { PaginaInicioComponent } from './paginas/Inicio/Pagina-Inicio/Pagina-Inicio.component';
import { UsuarioInterceptor } from './Interceptores/Usuario-Interceptor';
import { RegistroClienteComponent } from './paginas/RegistroCliente/RegistroCliente/RegistroCliente.component';
import { PaginasEnumeradasComponent } from './componentes/Enumeracion/paginas-enumeradas/paginas-enumeradas.component';

@NgModule({
  declarations: [
    AppComponent,
    VehiculosComponent,
    CalificacionComponent,
    VehiculoDetalleComponent,
    PaginaInicioComponent,
    VehiculoDetalleComponent,
    RegistroClienteComponent,
    PaginasEnumeradasComponent
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    
    
   
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: UsuarioInterceptor, multi:true}
  ]
    ,
  bootstrap: [AppComponent]
})
export class AppModule { }
