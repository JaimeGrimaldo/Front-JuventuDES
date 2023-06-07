import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NegociosUbicacionesPage } from './negocios-ubicaciones.page';

const routes: Routes = [
  {
    path: '',
    component: NegociosUbicacionesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NegociosUbicacionesPageRoutingModule {}
