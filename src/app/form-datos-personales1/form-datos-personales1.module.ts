import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormDatosPersonales1PageRoutingModule } from './form-datos-personales1-routing.module';

import { FormDatosPersonales1Page } from './form-datos-personales1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormDatosPersonales1PageRoutingModule
  ],
  declarations: [FormDatosPersonales1Page]
})
export class FormDatosPersonales1PageModule {}
