import { Component, OnInit } from '@angular/core';
import { BitacoraService } from 'src/app/service/bitacora.service';
import { ActivatedRoute, Router } from '@angular/router';
import { BitacoraEntity } from 'src/app/entities/bitacoraEntity';
import { OperadorEntity } from 'src/app/entities/operadorEntity';
import { Tracto } from '../../entities/tractoEntity';
import { OperadorService } from 'src/app/service/operador.service';
import { TractorsService } from 'src/app/service/tractors.service';
import { OrigenDestinoEntity } from 'src/app/entities/origenDestinoEntity';
import { OrigenDestinoService } from 'src/app/service/origen-destino.service';
import { GastoEntity } from 'src/app/entities/gastoEntity';
import { GastosService } from 'src/app/service/gastos.service';

@Component({
  selector: 'app-edit-bitacora',
  templateUrl: './edit-bitacora.component.html',
  styleUrls: ['./edit-bitacora.component.scss']
})
export class EditBitacoraComponent implements OnInit {

  bitacora: BitacoraEntity;
  id: string;
  IsEnable: boolean;
  showModal: boolean;
  showModalImg: boolean;
  title: string;
  index: any;
  bitacoraId: any;
  deleteImageId: number;
  showModalDeleteImage: boolean;
  tipos: any[];
  operadores: OperadorEntity[];
  tractors: Tracto[];
  ciudades: OrigenDestinoEntity[];
  gastos: GastoEntity[];
  gastosViatico: GastoEntity[];
  repartos: any[] = [{
    id:1,
    origenId:'',
    destinoId:'',
    descripcion:''
    }];
  costos: any[] = [{
    gastoId: '',
    value: '',
    id: 1,
  }];
  viaticos: any[] = [{
    gastoId: '',
    value: '',
    id: 1,
  }];

  constructor(private bitacoraService: BitacoraService,
    private operadorService: OperadorService,
    private tractoService: TractorsService,
    private activedRoute: ActivatedRoute,
    private origenDestinoService: OrigenDestinoService,
    private gastoViajeService: GastosService,
    private router: Router) {
    this.activedRoute.paramMap.subscribe(i => { this.id = i.get("Id") })

  }

  ngOnInit() {
    this.getOperadores();
    this.getTractors();
    this.getCiudades();
    this.getGastos();
    if (this.id != null) {
      this.title = "Editar Gasto"
      this.index = 0;
    }
    else {
      this.title = "Agregar Nuevo"
      this.IsEnable = true;
      this.bitacora = {
      };
    }
  }
  addItem() {
    this.costos.push({
      gastoId: '',
      value: '',
      id: this.costos.length + 1
    });
  }

  removeItemReparto(i: number) {
    this.repartos.splice(i, 1);
  }
  addItemReparto() {
    this.repartos.push({
      origenId:'',
      destinoId:'',
      descripcion:'',
      id: this.costos.length + 1
    });
    console.log(this.costos);
  }

  removeItem(i: number) {
    this.costos.splice(i, 1);
  }

  addItemViatico() {
    this.viaticos.push({
      gastoId: '',
      value: '',
      id: this.costos.length + 1
    });
  }

  removeItemViatico(i: number) {
    console.log(i);
    this.viaticos.splice(i, 1);
  }

  getGastos() {
    this.gastoViajeService.getGastos()
      .subscribe(response => {
        this.gastos = response.Data;
        this.gastosViatico = response.Data.filter(a => a.IsViatico);
      }, e => { });
  }
  getTractors() {
    this.tractoService.getTractors()
      .subscribe(response => {
        this.tractors = response.Data;
      }, e => { });
  }

  getOperadores() {
    this.operadorService.getOperadores()
      .subscribe(response => {
        this.operadores = response.Data;
      }, e => { });
  }

  getCiudades() {
    this.origenDestinoService.getOrigenDestinos()
      .subscribe(respose => {
        this.ciudades = respose.Data;
      }, e => { });
  }

  submit(e) {
    if (e) {
      this.bitacoraService.editBitacora(this.bitacora)
        .subscribe(response => {
          this.bitacoraId = response;
          this.bitacora.Id = this.bitacoraId.Data;
          this.bitacora.Costos = this.costos;
          this.bitacora.Viaticos = this.viaticos;
          this.bitacora.Repartos = this.repartos;
          this.router.navigate(["editGasto", this.bitacoraId.Data]);
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
    return (!this.IsEnable || (this.bitacora.Descripcion == undefined || this.bitacora.Descripcion == "" ||
      this.bitacora.Gasto == undefined));
  }

}
