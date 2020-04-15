import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-modal-confirm',
  templateUrl: './modal-confirm.component.html',
  styleUrls: ['./modal-confirm.component.scss']
})
export class ModalConfirmComponent implements OnInit {
  @Output() submit = new EventEmitter<boolean>();
  @Input()
  title: string;
  @Input()
  message: string;
  @Input()
  showModal :boolean;

  constructor() { }
  saveMethod() {
    this.submit.emit(true);
  }
  cancelModal(){
    this.submit.emit(false);
  }
  ngOnInit() {
  }

}
