import { Component, OnInit } from '@angular/core';
import { OrigenDestinoEntity } from 'src/app/entities/origenDestinoEntity';
import { OrigenDestinoService } from 'src/app/service/origen-destino.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-origen-destino',
  templateUrl: './edit-origen-destino.component.html',
  styleUrls: ['./edit-origen-destino.component.scss']
})
export class EditOrigenDestinoComponent implements OnInit {
  origenDestino: OrigenDestinoEntity;
  id: string;
  IsEnable: boolean;
  showModal: boolean;
  showModalImg: boolean;
  title: string;
  index: any;
  origenDestinoId: any;
  deleteImageId: number;
  showModalDeleteImage: boolean;


  constructor(private origenDestinoService: OrigenDestinoService,
    private activeRoute: ActivatedRoute,
    private router: Router) {
      this.activeRoute.paramMap.subscribe(i => {this.id = i.get("Id")})
     }

  ngOnInit() {
    if (this.id != null) {console.log('ok');
      this.title = "Editar Origen / Destino"
      this.getOrigenDestino(this.id);
      this.index = 0;

    }
    else {
      this.title = "Agregar Nuevo"
      this.IsEnable = true;
      this.origenDestino = {
      };
    }
  }

  getOrigenDestino(origenDestinoId) {
    this.origenDestinoService.getOrigenDestinoById(origenDestinoId)
      .subscribe(response => {
        this.origenDestino = response.Data;
      }, e => {
      });
  }
  submit(e) {
    if (e) {
      this.origenDestinoService.editOrigenDestino(this.origenDestino)
        .subscribe(response => {
          this.origenDestinoId = response;
          this.origenDestino.Id = this.origenDestinoId.Data;
          this.router.navigate(["editOrigenDestino", this.origenDestinoId.Data]);
        }, e => {
          console.log(e);
        });

      this.IsEnable = false;
    }
    this.showModal = false;

  }

  back() {
    this.router.navigate(["origenDestinos"]);
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
    return (!this.IsEnable || (this.origenDestino.Ciudad == undefined || this.origenDestino.Ciudad == "" ||
    this.origenDestino.Estado == undefined || this.origenDestino.Estado== ""));
  }

}
