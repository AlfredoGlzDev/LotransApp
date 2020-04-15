import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridComponent } from './grid/grid.component';
import { ClarityModule } from '@clr/angular';
import { ModalConfirmComponent } from './modal-confirm/modal-confirm.component';
import { UploadFileComponent } from './upload-file/upload-file.component';
import { ImagesComponent } from './images/images.component';




@NgModule({
  declarations: [GridComponent, ModalConfirmComponent, UploadFileComponent, ImagesComponent],
  imports: [
    CommonModule,
    ClarityModule,
  ],
  exports:[
    GridComponent,
    ModalConfirmComponent,
    UploadFileComponent,
    ImagesComponent
  ]
})
export class ComponentsModule { }
