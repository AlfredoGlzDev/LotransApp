import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { OperadorEntity } from '../entities/operadorEntity';

@Injectable({
  providedIn: 'root'
})
export class OperadorService {

  constructor(private api: ApiService) { }

  getOperadores() {
    return this.api.get('/operadores/getOperadores');
   }
 
   getOperadorById(id: string) {
     return this.api.get('/operadores/getOperadorById?id=' + id);
    }
 
   deleteOperador(id: string){
     return this.api.delete('/operadores/deleteOperador?id=' + id);
   }
 
   editOperador(item: OperadorEntity){ 
     return this.api.post('/operadores/editOperador', item)
   }
}
