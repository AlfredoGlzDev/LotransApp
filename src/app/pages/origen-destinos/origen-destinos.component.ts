import { Component, OnInit } from '@angular/core';
import { OrigenDestinoEntity } from 'src/app/entities/origenDestinoEntity';
import { OrigenDestinoService } from 'src/app/service/origen-destino.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-origen-destinos',
  templateUrl: './origen-destinos.component.html',
  styleUrls: ['./origen-destinos.component.scss']
})
export class OrigenDestinosComponent implements OnInit {
  origenDestinos: Array<OrigenDestinoEntity>
  origenDestinosheaders : Array<any>
  origenDestinoId: string
  showModal: boolean;
  
  constructor(private origenDestinoService: OrigenDestinoService, private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.origenDestinoService.getOrigenDestinos()
    .subscribe(response => {
      this.origenDestinos = response.Data;
    }, e => {

    });
    
  this.origenDestinosheaders = [
    {
      value: "Ciudad",
      text: "Ciudad"
    },
    {
      value: "Estado",
      text: "Estado"
    } 
    
  ];
  }

  showDeleteModal(e) {
    this.origenDestinoId = e;
    this.showModal = true;
  }

  deleteItem(e)
  {
    if(e)
    {
      this.origenDestinoService.deleteOrigenDestino(this.origenDestinoId)
      .subscribe(response => {
        this.origenDestinoService.getOrigenDestinos()
          .subscribe(response => {
            this.origenDestinos = [];
            this.origenDestinos = response.Data;
            this.showModal = false;
          }, e => {

          });
      }, e => {

      });
    }
    this.showModal = false;
  }

  editOrigenDestino(e){
    this.router.navigate(["editOrigenDestino",e]);
  }

  addNew(){
    this.router.navigate(["editOrigenDestino"]);
  }

}
