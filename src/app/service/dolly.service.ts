import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Dolly } from '../entities/dollyEntity';

@Injectable({
  providedIn: 'root'
})
export class DollyService {

  constructor(private api: ApiService) { }

  getDollys() {
   return this.api.get('/dollys/getDollys');
  }

  getDollyById(id: string) {
    return this.api.get('/dollys/getDollyById?id=' + id);
   }

  deleteDolly(id: string){
    return this.api.delete('/dollys/deleteDolly?id=' + id);
  }

  editDolly(item: Dolly){ 
    return this.api.post('/dollys/editDolly', item)
  }
}
