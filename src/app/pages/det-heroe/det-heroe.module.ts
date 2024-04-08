import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetHeroePageRoutingModule } from './det-heroe-routing.module';

//import { ComponentsModule } from 'src/app/components/components.module';
import { DetHeroePage } from './det-heroe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetHeroePageRoutingModule
  ],
  declarations: [DetHeroePage]
})
export class DetHeroePageModule {}
