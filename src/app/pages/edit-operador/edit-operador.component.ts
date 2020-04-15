import { Component, OnInit } from '@angular/core';
import { OperadorEntity } from 'src/app/entities/operadorEntity';
import { OperadorService } from 'src/app/service/operador.service';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment';

@Component({
  selector: 'app-edit-operador',
  templateUrl: './edit-operador.component.html',
  styleUrls: ['./edit-operador.component.scss']
})
export class EditOperadorComponent implements OnInit {
  operador: OperadorEntity;
  id: string;
  IsEnable: boolean;
  showModal: boolean;
  showModalImg: boolean;
  title: string;
  index: any;
  operadorId: any;
  deleteImageId: number;
  showModalDeleteImage: boolean;
  prueba: string;
  constructor(private operadorService: OperadorService,
    private activedRoute: ActivatedRoute,
    private router: Router) { 
      this.activedRoute.paramMap.subscribe(i => { this.id = i.get("Id") })
    }

  ngOnInit() {
   
    if (this.id != null) {
      this.title = "Editar Operador"
      this.getOperador(this.id);
      this.index = 0;

    }
    else {
      this.title = "Agregar Nuevo"
      this.IsEnable = true;
      this.operador = {
      };
    }
  }


  getOperador(id) {
    this.operadorService.getOperadorById(id)
      .subscribe(response => {
        this.operador = response.Data;
        this.operador.FechaIngreso = moment(this.operador.FechaIngreso).format("YYYY-MM-DD");
      }, e => {
      });
  }
  submit(e) {
    if (e) {
      this.operadorService.editOperador(this.operador)
        .subscribe(response => {
          this.operadorId = response;
          this.operador.Id = this.operadorId.Data;
          this.router.navigate(["editOperador", this.operadorId.Data]);
        }, e => {
          console.log(e);
        });

      this.IsEnable = false;
    }
    this.showModal = false;

  }

  back() {
    this.router.navigate(["operadores"]);
  }
  edit() {
    this.IsEnable = true;
  }

  cancelModalImageDelete() {
    this.showModalDeleteImage = true;

  }
  openModalImageDelete(id) {
    this.showModalDeleteImage = true;
    this.deleteImageId = id;
  }


  cancelModal() {
    this.showModal = false;

  }
  openModal() {
    this.showModal = true;
  }


  validateSumbit() {
    return (!this.IsEnable || (this.operador.Nombre == undefined || this.operador.Nombre == "" ||
      this.operador.ApellidoP == undefined || this.operador.ApellidoP == "" ||
      this.operador.ApellidoM == undefined || this.operador.ApellidoM == ""));
  }

}
