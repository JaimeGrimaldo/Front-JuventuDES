import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MostrarQrPageRoutingModule } from './mostrar-qr-routing.module';

import { MostrarQrPage } from './mostrar-qr.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MostrarQrPageRoutingModule
  ],
  declarations: [MostrarQrPage]
})
export class MostrarQrPageModule {}
