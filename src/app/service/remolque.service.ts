import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { RemolqueEntity } from '../entities/remolqueEntity';

@Injectable({
  providedIn: 'root'
})
export class RemolqueService {

  constructor(private api: ApiService) { }

  getRemolques() {
    return this.api.get('/remolques/getRemolques');
   }
 
   getRemolqueById(id: string) {
     return this.api.get('/remolques/getRemolqueById?id=' + id);
    }
 
   deleteRemolque(id: string){
     return this.api.delete('/remolques/deleteTracto?id=' + id);
   }
 
   editRemolque(item: RemolqueEntity){ 
     return this.api.post('/remolques/editRemolque', item)
   }

}
