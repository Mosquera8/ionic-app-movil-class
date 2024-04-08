import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { HeroeComponent } from './heroe/heroe.component';
//s
import { HeaderComponent } from './header/header.component';
import { HeroesTarjetaComponent } from './heroes-tarjeta/heroes-tarjeta.component';
import { HeroesComponent } from './heroes/heroes.component';



@NgModule({
  declarations: [
    HeroesComponent,
    HeroeComponent,
    HeroesTarjetaComponent,
    HeaderComponent
  ],
  exports: [
    HeroesComponent,
    HeroeComponent,
    HeroesTarjetaComponent,
    HeaderComponent

  ],
  imports: [
    CommonModule,
    IonicModule

  ]
})
export class ComponentsModule { }
