import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Tracto } from '../entities/tractoEntity';

@Injectable({
  providedIn: 'root'
})
export class TractorsService {

  constructor(private api: ApiService) { }

  getTractors() {
   return this.api.get('/tractors/getTractos');
  }

  getTractorById(id: string) {
    return this.api.get('/tractors/getTractoById?id=' + id);
   }

  deleteTractor(id: string){
    return this.api.delete('/tractors/deleteTracto?id=' + id);
  }

  editTractor(item: Tracto){ 
    return this.api.post('/tractors/editTracto', item)
  }
}
