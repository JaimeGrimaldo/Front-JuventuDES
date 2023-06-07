import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NegociosUbicacionesPageRoutingModule } from './negocios-ubicaciones-routing.module';

import { NegociosUbicacionesPage } from './negocios-ubicaciones.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NegociosUbicacionesPageRoutingModule
  ],
  declarations: [NegociosUbicacionesPage]
})
export class NegociosUbicacionesPageModule {}
