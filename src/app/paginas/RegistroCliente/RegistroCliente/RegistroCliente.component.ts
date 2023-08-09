import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Cliente } from 'src/app/interfaces/Cliente';
import { ClienteService } from 'src/app/servicios/ClienteService.service';

@Component({
  selector: 'app-RegistroCliente',
  templateUrl: './RegistroCliente.component.html',
  styleUrls: ['./RegistroCliente.component.css']
})
export class RegistroClienteComponent implements OnInit {

  constructor(private clienteService :ClienteService,
    private formBuilder: FormBuilder) { }
 
  titulo: String = "Registro Cliente";
  id: any[] = [];
  cliente: string;
  formularioCliente: FormGroup;
  
  
  
  ngOnInit() {

    this.consultaCliente();
    this.formularioCliente = this.formBuilder.group({
         "nombre": [null],
         "apellido": [null],
         "telefono": [null],
         "email": [null],
     });
   
     }

   consultaCliente(){
     this.clienteService.getCliente(this.cliente).subscribe((respuesta)=>{
       if(respuesta.codigo == 1){
          this.id = respuesta.data;
        }
      });
    }


    getListaVehiculos(){
     return this.id;
    }

    guardarCliente(){
     let cliente: Cliente = (this.formularioCliente.value);
     console.log(cliente)
      this.clienteService.agregarCliente(cliente).subscribe((respuesta) =>{
       alert(respuesta.mensaje);
       if(respuesta.codigo == 1 ){
        this.consultaCliente();
       }
     },
            
//      (errorHttp:HttpErrorResponse)=>{
//        let mensaje = errorHttp.error.mensaje;
//        mensaje += errorHttp.error.error?.nombre ? ( '- ' + errorHttp.error.error?.nombre) : "";
//        mensaje += errorHttp.error.error?.apellido ? ( '- ' + errorHttp.error.error?.apellido) : "";
//        mensaje += errorHttp.error.error?.telefono ? ( '- ' + errorHttp.error.error?.telefono) : "";
//        mensaje += errorHttp.error.error?.email ? ( '- ' + errorHttp.error.error?.email) : "";
//        alert(mensaje);

//      });     
)}
}
