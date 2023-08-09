import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VehiculosComponent } from './paginas/Vehiculos/Vehiculos.component';
import { VehiculoDetalleComponent } from './paginas/VehiculoDetalle/VehiculoDetalle/VehiculoDetalle.component';
import { PaginaInicioComponent } from './paginas/Inicio/Pagina-Inicio/Pagina-Inicio.component';
import { RegistroClienteComponent } from './paginas/RegistroCliente/RegistroCliente/RegistroCliente.component';


const routes: Routes = [

  {
  path: 'Pagina-Inicio',
  component: PaginaInicioComponent
  },

  {
  path: "vehiculos",
  component: VehiculosComponent
    
  },

  {
    path:"vehiculos/:codigo",
    component: VehiculoDetalleComponent
  },

  {
    path:"RegistroCliente",
    component: RegistroClienteComponent
  },

  {
    path: '',
    redirectTo: 'Pagina-Inicio',
    pathMatch: 'full',

  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
