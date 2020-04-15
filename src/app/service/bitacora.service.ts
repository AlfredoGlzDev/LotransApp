import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { BitacoraEntity } from '../entities/bitacoraEntity';

@Injectable({
  providedIn: 'root'
})
export class BitacoraService {

  constructor(private api: ApiService) { }
  // getGastos() {
  //   return this.api.get('/gastos/getGastos');
  //  }
 
  //  getGastoById(id: string) {
  //    return this.api.get('/gastos/getGastoById?id=' + id);
  //   }
 
  //  deleteGasto(id: string){
  //    return this.api.delete('/gastos/deleteGastos?id=' + id);
  //  }
 
   editBitacora(item: BitacoraEntity){ 
     return this.api.post('/gastos/editBitacora', item)
   }
}
