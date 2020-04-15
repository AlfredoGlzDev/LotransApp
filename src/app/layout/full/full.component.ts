import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-full',
  templateUrl: './full.component.html',
  styleUrls: ['./full.component.scss']
})
export class FullComponent implements OnInit {

  constructor() { }
  catalogs: any[];
  ngOnInit() {
    this.catalogs = [
    
      {
        name: "Tractores",
        url: "/tractors"
      },
      {
        name: "Dollys",
        url: "/dollys"
      },
      {
        name: "Remolques",
        url: "/remolques"
      },
      {
        name: "Operadores",
        url: "/operadores"
      },
      {
        name: "Gastos de Viaje",
        url: "/gastos"
      },
      {
        name: "Origen/Destinos",
        url: "/origenDestinos"
      }

    ]
  }

}
