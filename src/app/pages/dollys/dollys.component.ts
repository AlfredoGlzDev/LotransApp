import { Component, OnInit } from '@angular/core';
import { Dolly } from 'src/app/entities/dollyEntity';
import { DollyService } from 'src/app/service/dolly.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dollys',
  templateUrl: './dollys.component.html',
  styleUrls: ['./dollys.component.scss']
})
export class DollysComponent implements OnInit {
  dollys: Array<Dolly>;
  dollysheaders: Array<any>
  dollyId : string;
  showModal: boolean;
  constructor(private dollyService: DollyService, private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.dollyService.getDollys()
      .subscribe(response => {
        this.dollys = response.Data;
      }, e => {

      });
    this.dollysheaders = [
      {
        value: "Marca",
        text: "Marca"
      },
      {
        value: "TipoDolly",
        text: "Tipo"
      },
      {
        value: "Modelo",
        text: "Modelo"
      },
     
      {
        value: "Economico",
        text: "Economico"
      },
      {
        value: "NoSerie",
        text: "No. de Serie"
      }
    ];
  }
  showDeleteModal(e) {
    this.dollyId = e;
    this.showModal = true;
  }

  deleteItem(e)
  {
    if(e)
    {
      this.dollyService.deleteDolly(this.dollyId)
      .subscribe(response => {
        this.dollyService.getDollys()
          .subscribe(response => {
            this.dollys = [];
            this.dollys = response.Data;
            this.showModal = false;
          }, e => {

          });
      }, e => {

      });
    }
    this.showModal = false;
  }

  editDolly(e){console.log(e);
    this.router.navigate(["editDolly",e]);
  }

  addNew(){
    this.router.navigate(["editDolly"]);
  }

}
