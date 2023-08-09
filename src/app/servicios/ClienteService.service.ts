import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cliente } from '../interfaces/Cliente';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
  }) 
  
  export class ClienteService {
 
  
  constructor (private http: HttpClient) { }
     baseUrl = "http://www.epico.gob.ec/vehiculo/public/api/";
  

     
     getCliente(id:string){
      return this.http.get<any>(this.baseUrl + "Cliente/" + id);
   
    }


  eliminarCliente(nombre: string){
   return this.http.delete<any>(this.baseUrl + 'cliente/' + nombre);
 }


 agregarCliente(cliente: Cliente){
     let body = this.getParamsCliente(cliente);
     console.log(body)
   return this.http.post<any>(this.baseUrl + 'cliente/', body);
   
 }

 
 actualizarvehiculo(cliente: Cliente, nombre:string){
   let body = this.getParamsCliente(cliente);
   return this.http.put<any>(this.baseUrl+'cliente/' + nombre, body);

 }


 getParamsCliente(cliente:Cliente){
   let body = new HttpParams();
   body = cliente.nombre ? body.set('nombre', cliente.nombre): body;
   body = cliente.apellido ? body.set('apellido', cliente.apellido): body;
   body = cliente.telefono ? body.set('telefono', cliente.telefono): body;
   body = cliente.email ?  body.set('email', cliente.email): body;
   return body;
 }

     
  }