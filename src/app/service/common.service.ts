import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { ImageEnity } from '../entities/imageEntity';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private api: ApiService) { }

  addImage(item: any, catId: number, catType: number, name:string) {
    return this.api.post('/common/addImage?catId='+ catId+'&catType=' + catType + "&name="+name  ,item);
   }

   getImages(catId: number, catType: number) {
    //console.log(item.Type);
    return this.api.get('/common/getImages?catId='+ catId+'&catType=' + catType);
   }

   deleteImage(id){
    return this.api.get('/common/deleteImage?id=' + id);
   }

}
