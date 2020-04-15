import { Component, OnInit } from '@angular/core';
import { RemolqueEntity } from 'src/app/entities/remolqueEntity';
import { RemolqueService } from 'src/app/service/remolque.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-remolques',
  templateUrl: './remolques.component.html',
  styleUrls: ['./remolques.component.scss']
})
export class RemolquesComponent implements OnInit {
  remolques: Array<RemolqueEntity>;
  remolquesheaders: Array<any>
  remolqueId : string;
  showModal: boolean;
  constructor(private remolqueService: RemolqueService, private http: HttpClient, private router: Router) { }

  ngOnInit() {

    this.remolqueService.getRemolques()
      .subscribe(response => {
        this.remolques = response.Data;
      }, e => {

      });
      
    this.remolquesheaders = [
      {
        value: "Marca",
        text: "Marca"
      },
      {
        value: "Tipo",
        text: "Tipo"
      },
      {
        value: "Modelo",
        text: "Modelo"
      },
      {
        value: "Placas",
        text: "Placas"
      },
      {
        value: "Economico",
        text: "Economico"
      },
      {
        value: "NoSerie",
        text: "No. de Serie"
      },
      {
        value: "NoEjes",
        text: "No. de Ejes"
      }
    ];

  }

  showDeleteModal(e) {
    this.remolqueId = e;
    this.showModal = true;
  }

  deleteItem(e)
  {
    if(e)
    {
      console.log(this.remolqueId);
      this.remolqueService.deleteRemolque(this.remolqueId)
      .subscribe(response => {
        this.remolqueService.getRemolques()
          .subscribe(response => {
            this.remolques = [];
            this.remolques = response.Data;
            this.showModal = false;
          }, e => {

          });
      }, e => {

      });
    }
    this.showModal = false;
  }

  editRemolque(e){console.log(e);
    this.router.navigate(["editRemolque",e]);
  }

  addNew(){
    this.router.navigate(["editRemolque"]);
  }

}
