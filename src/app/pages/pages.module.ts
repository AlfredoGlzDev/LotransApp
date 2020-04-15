import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { TractorsComponent } from './tractors/tractors.component';
import { HomeComponent } from './home/home.component';
import { DollysComponent } from './dollys/dollys.component';
import { RemolquesComponent } from './remolques/remolques.component';
import { GastosComponent } from './gastos/gastos.component';
import { ComponentsModule } from '../components/components.module';
import { EditTractoComponent } from './edit-tracto/edit-tracto.component';
import { FormsModule } from '@angular/forms';
import { ClarityModule } from '@clr/angular';
import { EditDollyComponent } from './edit-dolly/edit-dolly.component';
import { EditRemolqueComponent } from './edit-remolque/edit-remolque.component';
import { OperadoresComponent } from './operadores/operadores.component';
import { EditOperadorComponent } from './edit-operador/edit-operador.component';
import { EditGastoComponent } from './edit-gasto/edit-gasto.component';
import { BitacoraViajeComponent } from './bitacora-viaje/bitacora-viaje.component';
import { OrigenDestinosComponent } from './origen-destinos/origen-destinos.component';
import { EditOrigenDestinoComponent } from './edit-origen-destino/edit-origen-destino.component';
import { EditBitacoraComponent } from './edit-bitacora/edit-bitacora.component';





@NgModule({
  declarations: [TractorsComponent, 
    HomeComponent, 
    DollysComponent, 
    RemolquesComponent, 
    OperadoresComponent, 
    GastosComponent, 
    EditTractoComponent, 
    EditDollyComponent, 
    EditRemolqueComponent, 
    EditOperadorComponent, 
    EditGastoComponent, BitacoraViajeComponent, OrigenDestinosComponent, EditOrigenDestinoComponent, EditBitacoraComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    ComponentsModule,
    FormsModule,
    ClarityModule
  ]
})
export class PagesModule { }
