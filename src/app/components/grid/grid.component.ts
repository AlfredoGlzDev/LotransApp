import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TractorsService } from 'src/app/service/tractors.service';
import { Router } from '@angular/router';
import { DollyService } from 'src/app/service/dolly.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})

export class GridComponent implements OnInit {
  deleteId: string;
  showModal: boolean;
 
  @Output() openModalDelete = new EventEmitter<string>();
  @Output() editPage = new EventEmitter<string>();

  @Input()
  list: Array<any>;
  @Input()
  headers: Array<any>;
  @Input()
  catalog: string;
 

  constructor(private tractorService: TractorsService, dollyService: DollyService, private router: Router) { }

  ngOnInit() {
   
  }

  deleteModal(id) {
    this.openModalDelete.emit(id);
  }
  onEdit(id) {
    this.editPage.emit(id);
  }

  openModal(id) {
    this.deleteId = id;
    this.showModal = true;
  }
}
