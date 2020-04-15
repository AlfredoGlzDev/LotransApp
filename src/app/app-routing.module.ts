import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FullComponent } from './layout/full/full.component';


const routes: Routes = [
  {
    path: '',
    component:FullComponent,
    children: [
      { path: '', loadChildren: './pages/pages.module#PagesModule'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
