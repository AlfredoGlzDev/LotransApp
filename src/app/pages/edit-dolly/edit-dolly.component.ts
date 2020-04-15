import { Component, OnInit } from '@angular/core';
import { Dolly } from 'src/app/entities/dollyEntity';
import { DollyService } from 'src/app/service/dolly.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-dolly',
  templateUrl: './edit-dolly.component.html',
  styleUrls: ['./edit-dolly.component.scss']
})
export class EditDollyComponent implements OnInit {
  dolly: Dolly;
  id: string;
  IsEnable: boolean;
  showModal: boolean;
  showModalImg: boolean;
  title: string;
  index: any;
  dollyId: any;
  deleteImageId: number;
  showModalDeleteImage: boolean;
  
  constructor(private dollyService: DollyService,
    private activedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.activedRoute.paramMap.subscribe(i => { this.id = i.get("Id") })
  }

  ngOnInit() {
    if (this.id != null) {
      this.title = "Editar Dolly"
      this.getDolly(this.id);
      this.index = 0;

    }
    else {
      this.title = "Agregar Nuevo"
      this.IsEnable = true;
      this.dolly = {
      };
    }
  }

  getDolly(id) {
    this.dollyService.getDollyById(id)
      .subscribe(response => {
        this.dolly = response.Data;
      }, e => {
      });
  }

  submit(e) {
    if (e) {
      this.dollyService.editDolly(this.dolly)
        .subscribe(response => {
          this.dollyId = response;
          this.dolly.Id = this.dollyId.Data;
          this.IsEnable = false;
          this.router.navigate(["editDolly", this.dollyId.Data]);
        }, e => {
          console.log(e);
        });


    }
    this.showModal = false;

  }

  back() {
    this.router.navigate(["dollys"]);
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
    return (!this.IsEnable || (this.dolly.Modelo == undefined || this.dolly.Modelo == "" ||
      this.dolly.Marca == undefined || this.dolly.Marca == ""));
  }

}
