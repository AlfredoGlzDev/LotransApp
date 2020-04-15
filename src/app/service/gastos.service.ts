import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { GastoEntity } from '../entities/gastoEntity';

@Injectable({
  providedIn: 'root'
})
export class GastosService {

  constructor(private api: ApiService) { }

  getGastos() {
    return this.api.get('/gastos/getGastos');
   }
 
   getGastoById(id: string) {
     return this.api.get('/gastos/getGastoById?id=' + id);
    }
 
   deleteGasto(id: string){
     return this.api.delete('/gastos/deleteGastos?id=' + id);
   }
 
   editGasto(item: GastoEntity){ 
     return this.api.post('/gastos/editGasto', item)
   }
}
