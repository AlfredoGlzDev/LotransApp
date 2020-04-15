import { Component, OnInit } from '@angular/core';
import { GastoEntity } from 'src/app/entities/gastoEntity';
import { GastosService } from 'src/app/service/gastos.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gastos',
  templateUrl: './gastos.component.html',
  styleUrls: ['./gastos.component.scss']
})
export class GastosComponent implements OnInit {
  gastos: Array<GastoEntity>;
  gastosheaders: Array<any>
  gastoId : string;
  showModal: boolean;
  constructor(private gastosService: GastosService, private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.gastosService.getGastos()
      .subscribe(response => {
        this.gastos = response.Data;
        console.log(this.gastos);
      }, e => {

      });
      
    this.gastosheaders = [
      {
        value: "Clave",
        text: "Clave"
      },
      {
        value: "Concepto",
        text: "Concepto"
      },
      {
        value:"TipoGasto",
        text: "Tipo Gasto"
      }
    

      
    ];
  }
  showDeleteModal(e) {
    this.gastoId = e;
    this.showModal = true;
  }

  deleteItem(e)
  {
    if(e)
    {
      this.gastosService.deleteGasto(this.gastoId)
      .subscribe(response => {
        this.gastosService.getGastos()
          .subscribe(response => {
            this.gastos = [];
            this.gastos = response.Data;
            this.showModal = false;
          }, e => {

          });
      }, e => {

      });
    }
    this.showModal = false;
  }

  editGastos(e){
    this.router.navigate(["editGasto",e]);
  }

  addNew(){
    this.router.navigate(["editGasto"]);
  }
}
