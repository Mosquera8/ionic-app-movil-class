import { Component } from '@angular/core';
import { Heroe, HeroeBD } from 'src/app/interfaces/heroes.interface';
import { HeroesBDService } from 'src/app/services/heroes-bd.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  unosHeroes: Heroe[] = [];
  unTipo:string = 'detalle';

  //Nuevos Datos desde la BD
  misDatosHeroesBD: HeroeBD[] = [];

  constructor(
              //private data:HeroesServiceService,

              //Inyecto el nuevo servicio para una BD
              private databd:HeroesBDService
              ) {

    //this.unosHeroes = data.getHeroes();
    console.log("DATOS",this.unosHeroes);

    this.getHeroesBD();

  }

  async getHeroesBD() {
    await this.databd
      .getHeroes()
      .toPromise()
      .then((data: any) => {
        this.misDatosHeroesBD = data.resp;
        console.log(this.misDatosHeroesBD);
      });
  }



}
