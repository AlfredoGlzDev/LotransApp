import { Component, OnInit } from '@angular/core';
import { RemolqueEntity } from 'src/app/entities/remolqueEntity';
import { RemolqueService } from 'src/app/service/remolque.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-remolque',
  templateUrl: './edit-remolque.component.html',
  styleUrls: ['./edit-remolque.component.scss']
})
export class EditRemolqueComponent implements OnInit {
  remolque: RemolqueEntity;
  id: string;
  IsEnable: boolean;
  showModal: boolean;
  showModalImg: boolean;
  title: string;
  index: any;
  remolqueId: any;
  deleteImageId: number;
  showModalDeleteImage: boolean;

  constructor(private remolqueService: RemolqueService,
    private activedRoute: ActivatedRoute,
    private router: Router) { 
      this.activedRoute.paramMap.subscribe(i => { this.id = i.get("Id") })
    }

  ngOnInit() {
    if (this.id != null) {
      this.title = "Editar Remolque"
      this.getRemolque(this.id);
      this.index = 0;

    }
    else {
      this.title = "Agregar Nuevo"
      this.IsEnable = true;
      this.remolque = {};
    }
  }

  getRemolque(id) {
    this.remolqueService.getRemolqueById(id)
      .subscribe(response => {
        this.remolque = response.Data;
      }, e => {
      });
  }
  submit(e) {
    if (e) {
      this.remolqueService.editRemolque(this.remolque)
        .subscribe(response => {
          this.remolqueId = response;
          this.IsEnable = false;
          this.router.navigate(["editRemolque", this.remolqueId.Data]);
        }, e => {
          console.log(e);
        });

    }
    this.showModal = false;

  }

  back() {
    this.router.navigate(["remolques"]);
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
    return (!this.IsEnable || (this.remolque.Modelo == undefined || this.remolque.Modelo == "" ||
      this.remolque.Marca == undefined || this.remolque.Marca == "" ||
      this.remolque.Placas == undefined || this.remolque.Placas == ""));
  }

}
