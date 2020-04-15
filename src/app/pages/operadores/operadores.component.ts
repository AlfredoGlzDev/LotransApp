import { Component, OnInit } from '@angular/core';
import { OperadorEntity } from 'src/app/entities/operadorEntity';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { OperadorService } from 'src/app/service/operador.service';

@Component({
  selector: 'app-operadores',
  templateUrl: './operadores.component.html',
  styleUrls: ['./operadores.component.scss']
})
export class OperadoresComponent implements OnInit {
  operadores: Array<OperadorEntity>;
  operadoresheaders: Array<any>
  operadorId : string;
  showModal: boolean;
  prueba: Array<any>;
  constructor(private operadorService: OperadorService, private http: HttpClient, private router: Router) { 
    
  }

  ngOnInit() {
    this.operadorService.getOperadores()
      .subscribe(response => {
        this.operadores = response.Data;
      }, e => {
       
      });
     
      this.prueba =
      [
        {
          text: "uno",
          value: 1
        },
        {
          text: "dos",
          value: 2
        }
    ];
    this.operadoresheaders = [
      {
        value: "NoEmpleado",
        text: "No. de Empleado"
      },
      {
        value: "Nombre",
        text: "Nombre"
      },
      {
        value: "ApellidoP",
        text: "Primer Apellido"
      },
      {
        value: "ApellidoM",
        text: "Segundo Apellido"
      },
      {
        value: "NoCuenta",
        text: "No. de Cuenta"
      },
      {
        value: "Fecha",
        text: "Fecha de Ingreso"
      },
      {
        value: "NoCelular",
        text: "No. de Celular"
      }
    ];
  }
  
  showDeleteModal(e) {
    this.operadorId = e;
    this.showModal = true;
  }

  deleteItem(e)
  {
    if(e)
    {
      this.operadorService.deleteOperador(this.operadorId)
      .subscribe(response => {
        this.operadorService.getOperadores()
          .subscribe(response => {
            this.operadores = [];
            this.operadores = response.Data;
            this.showModal = false;
          }, e => {

          });
      }, e => {

      });
    }
    this.showModal = false;
  }

  editOperadores(e){
    this.router.navigate(["editOperador",e]);
  }

  addNew(){
    this.router.navigate(["editOperador"]);
  }
}
