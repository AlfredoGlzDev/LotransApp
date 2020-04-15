import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TractorsService } from 'src/app/service/tractors.service';
import { HttpClient } from '@angular/common/http';
import { Tracto } from '../../entities/tractoEntity';

@Component({
  selector: 'app-tractors',
  templateUrl: './tractors.component.html',
  styleUrls: ['./tractors.component.scss']
})
export class TractorsComponent implements OnInit {
  tractors: Array<Tracto>;
  tractorheaders: Array<any>
  showModal: boolean;
  tractoId: string;

  constructor(private tractorService: TractorsService, private http: HttpClient, private router: Router) {
  }

  ngOnInit() {
    this.tractorService.getTractors()
      .subscribe(response => {
        this.tractors = response.Data;
      }, e => {

      });
    this.tractorheaders = [
      {
        value: "Marca",
        text: "Marca"
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
        value: "SerieMotor",
        text: "Serie Motor"
      }];
  }

  showDeleteModal(e) {
    this.tractoId = e;
    this.showModal = true;

  }
  editTractor(e){
    this.router.navigate(["editTracto",e]);
  }

  addNew(){
    this.router.navigate(["editTracto"]);
  }
  deleteItem(e) {
    if(e)
    {
      this.tractorService.deleteTractor(this.tractoId)
      .subscribe(response => {
        this.tractorService.getTractors()
          .subscribe(response => {
            this.tractors = [];
            this.tractors = response.Data;
            this.showModal = false;
          }, e => {

          });
      }, e => {

      });
    }
    this.showModal = false;
  }

}
