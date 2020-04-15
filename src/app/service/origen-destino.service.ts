import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { OrigenDestinoEntity } from '../entities/origenDestinoEntity';

@Injectable({
  providedIn: 'root'
})
export class OrigenDestinoService {

  constructor(private api: ApiService) { }

  getOrigenDestinos() {
    return this.api.get('/origenDestino/getOrigenDestinos');
   }
 
   getOrigenDestinoById(id: string) {
     return this.api.get('/origenDestino/getOrigenDestinoById?id=' + id);
    }
 
   deleteOrigenDestino(id: string){
     return this.api.delete('/origenDestino/deleteOrigenDestino?id=' + id);
   }
 
   editOrigenDestino(item: OrigenDestinoEntity){ 
     return this.api.post('/origenDestino/editOrigenDestino', item)
   }

}
