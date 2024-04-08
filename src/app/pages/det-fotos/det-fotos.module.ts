import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetFotosPageRoutingModule } from './det-fotos-routing.module';

import { DetFotosPage } from './det-fotos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetFotosPageRoutingModule
  ],
  declarations: [DetFotosPage]
})
export class DetFotosPageModule {}
