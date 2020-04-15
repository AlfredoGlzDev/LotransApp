import { Component, OnInit, Input } from '@angular/core';
import { TractorsService } from 'src/app/service/tractors.service';
import { Tracto } from 'src/app/entities/tractoEntity';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-edit-tracto',
  templateUrl: './edit-tracto.component.html',
  styleUrls: ['./edit-tracto.component.scss']
})

export class EditTractoComponent implements OnInit {
  tracto: Tracto;
  id: string;
  IsEnable: boolean;
  showModal: boolean;
  showModalImg: boolean;
  title: string;
  index: any;
  tractoId: any;
  deleteImageId: number;
  showModalDeleteImage: boolean;


  constructor(private tractorService: TractorsService,
    private activedRoute: ActivatedRoute,
    private router: Router) {
    this.activedRoute.paramMap.subscribe(i => { this.id = i.get("Id") })
  }

  ngOnInit() {
    if (this.id != null) {
      this.title = "Editar Tractor"
      this.getTractor(this.id);
      this.index = 0;

    }
    else {
      this.title = "Agregar Nuevo"
      this.IsEnable = true;
      this.tracto = {
      };
    }
  }

  getTractor(tractoId) {
    this.tractorService.getTractorById(tractoId)
      .subscribe(response => {
        this.tracto = response.Data;
      }, e => {
      });
  }
  submit(e) {
    if (e) {
      this.tractorService.editTractor(this.tracto)
        .subscribe(response => {
          this.tractoId = response;
          this.tracto.Id = this.tractoId.Data;
          this.IsEnable = false;
          this.router.navigate(["editTracto",this.tractoId.Data]);
        }, e => {
          console.log(e);
        });

    }
    this.showModal = false;

  }

  back() {
    this.router.navigate(["tractors"]);
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
    return (!this.IsEnable || (this.tracto.Modelo == undefined || this.tracto.Modelo == "" ||
      this.tracto.Marca == undefined || this.tracto.Marca == "" ||
      this.tracto.Placas == undefined || this.tracto.Placas == ""));
  }
}
