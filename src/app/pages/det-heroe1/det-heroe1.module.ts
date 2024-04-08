import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetHeroe1PageRoutingModule } from './det-heroe1-routing.module';

import { DetHeroe1Page } from './det-heroe1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetHeroe1PageRoutingModule
  ],
  declarations: [DetHeroe1Page]
})
export class DetHeroe1PageModule {}
