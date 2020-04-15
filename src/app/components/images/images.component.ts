import { Component, OnInit, Input } from '@angular/core';
import { CommonService } from 'src/app/service/common.service';
import { ImageEnity } from 'src/app/entities/imageEntity';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.scss']
})
export class ImagesComponent implements OnInit {
  @Input() catId: number;
  @Input() type: number;

  images: Array<ImageEnity>;
  imageId: number;
  showDeleteModal: boolean;
  showImageModal: boolean;
  index: number;
  constructor(private CommonService: CommonService, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.index = 0;
    this.getImages(this.catId, this.type)
   
  }

  getImages(catId, type) {
    this.CommonService.getImages(catId, type)
      .subscribe(response => {
        this.images = response.Data;
      }, e => {

      });

  }
  openModalImageDelete(id)
  {
    this.imageId = id;
    this.showDeleteModal = true;
  }
  deleteImage(e) {
    if(e)
    {
      this.CommonService.deleteImage(this.imageId)
      .subscribe(response => {
        this.getImages(this.catId, this.type);
        this.showDeleteModal = false;
      }, e => {

      });
    }
    this.showDeleteModal = false;
    
  }

  showImage(index) {
    this.showImageModal = true;
    this.index = index;
  }
 
  addImage(event) {
    let formdata = new FormData();
     formdata.append("Img", event.target.files[0]);
    // formdata.append("Type", "1");
    this.CommonService.addImage(formdata,this.catId, this.type, event.target.files[0].name).subscribe(response => {
      this.getImages(this.catId, this.type);
    }, e => {

    });

  }
  convertImage(b64) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(`data:image/png;base64, ${b64}`);

  }
}
