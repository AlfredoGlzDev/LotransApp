import { Component, OnInit } from '@angular/core';
import { GastoEntity } from 'src/app/entities/gastoEntity';
import { GastosService } from 'src/app/service/gastos.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-gasto',
  templateUrl: './edit-gasto.component.html',
  styleUrls: ['./edit-gasto.component.scss']
})
export class EditGastoComponent implements OnInit {
  gasto: GastoEntity;
  id: string;
  IsEnable: boolean;
  showModal: boolean;
  showModalImg: boolean;
  title: string;
  index: any;
  gastoId: any;
  deleteImageId: number;
  showModalDeleteImage: boolean;
  tipos: any[];
  constructor(private gastoService: GastosService,
    private activedRoute: ActivatedRoute,
    private router: Router) {
    this.activedRoute.paramMap.subscribe(i => { this.id = i.get("Id") })
  }

  ngOnInit() {
    if (this.id != null) {
      this.title = "Editar Gasto"
      this.getGasto(this.id);
      this.index = 0;

    }
    else {
      this.title = "Agregar Nuevo"
      this.IsEnable = true;
      this.gasto = {
      };
    }
  }
  getGasto(tractoId) {
    this.gastoService.getGastoById(tractoId)
      .subscribe(response => {
        this.gasto = response.Data;
      }, e => {
      });
  }
  submit(e) {
    if (e) {
      this.gastoService.editGasto(this.gasto)
        .subscribe(response => {
          this.gastoId = response;
          this.gasto.Id = this.gastoId.Data;
          this.router.navigate(["editGasto", this.gastoId.Data]);
        }, e => {
          console.log(e);
        });

      this.IsEnable = false;
    }
    this.showModal = false;

  }

  back() {
    this.router.navigate(["gastos"]);
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
    //alert(this.tracto.Modelo != undefined && this.tracto.Marca != undefined);
    return (!this.IsEnable || (this.gasto.Clave == undefined || this.gasto.Clave == "" ||
      this.gasto.Concepto == undefined || this.gasto.Concepto == ""));
  }
}
