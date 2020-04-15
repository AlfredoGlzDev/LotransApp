import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TractorsComponent } from './tractors/tractors.component';
import { DollysComponent } from './dollys/dollys.component';
import { RemolquesComponent } from './remolques/remolques.component';
import { OperadoresComponent } from './operadores/operadores.component';
import { GastosComponent } from './gastos/gastos.component';
import { EditTractoComponent } from './edit-tracto/edit-tracto.component';
import { Tracto } from '../entities/tractoEntity';
import { EditDollyComponent } from './edit-dolly/edit-dolly.component';
import { EditRemolqueComponent } from './edit-remolque/edit-remolque.component';
import { EditOperadorComponent } from './edit-operador/edit-operador.component';
import { EditGastoComponent } from './edit-gasto/edit-gasto.component';
import { BitacoraViajeComponent } from './bitacora-viaje/bitacora-viaje.component';
import { OrigenDestinosComponent } from './origen-destinos/origen-destinos.component';
import { EditOrigenDestinoComponent } from './edit-origen-destino/edit-origen-destino.component';
import { EditBitacoraComponent } from './edit-bitacora/edit-bitacora.component';


const routes: Routes = [{
  path: '',
  component: HomeComponent
},
{
  path: 'tractors',
  component: TractorsComponent
},
{
  path: 'dollys',
  component: DollysComponent
},
{
  path: 'remolques',
  component: RemolquesComponent
},
{
  path: 'operadores',
  component: OperadoresComponent
},
{
  path: 'gastos',
  component: GastosComponent
},
{
  path: 'editTracto',
  component: EditTractoComponent
},
{
  path: 'editTracto/:Id',
  component: EditTractoComponent
},
{
  path: 'editDolly',
  component: EditDollyComponent
},
{
  path: 'editDolly/:Id',
  component: EditDollyComponent
},
{
  path: 'editRemolque',
  component: EditRemolqueComponent
},
{
  path: 'editRemolque/:Id',
  component: EditRemolqueComponent
},
{
  path: 'editOperador',
  component: EditOperadorComponent
},
{
  path: 'editOperador/:Id',
  component: EditOperadorComponent
},
{
  path: 'editGasto',
  component: EditGastoComponent
},
{
  path: 'editGasto/:Id',
  component: EditGastoComponent
},
{
  path: 'bitacoraViaje',
  component: BitacoraViajeComponent
},
{
  path: 'editBitacora',
  component: EditBitacoraComponent
},
{
  path: 'editBitacora/:Id',
  component: EditBitacoraComponent
},
{
  path: 'origenDestinos',
  component: OrigenDestinosComponent
},
{
  path: 'editOrigenDestino',
  component: EditOrigenDestinoComponent
},
{
  path: 'editOrigenDestino/:Id',
  component: EditOrigenDestinoComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
