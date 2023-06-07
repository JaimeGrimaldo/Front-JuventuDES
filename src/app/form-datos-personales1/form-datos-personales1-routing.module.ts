import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormDatosPersonales1Page } from './form-datos-personales1.page';

const routes: Routes = [
  {
    path: '',
    component: FormDatosPersonales1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormDatosPersonales1PageRoutingModule {}
