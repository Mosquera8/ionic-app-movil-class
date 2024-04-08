import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroeBD } from 'src/app/interfaces/heroes.interface';
import { HeroesBDService } from 'src/app/services/heroes-bd.service';

@Component({
  selector: 'app-det-heroe1',
  templateUrl: './det-heroe1.page.html',
  styleUrls: ['./det-heroe1.page.scss'],
})
export class DetHeroe1Page implements OnInit {
  unId!:any;
  otroDato!:HeroeBD;
  
 constructor(route: ActivatedRoute,
   //data:HeroesServiceService
   private databd:HeroesBDService
   ) {
   this.unId = route.snapshot.params["idheroe"];
   console.log('MONGOID',this.unId);

   //this.unHeroe = data.getUnHeroe(this.unId);
   //console.log(this.unHeroe);

   this.getUnHeroeBD(this.unId);

  }

  async getUnHeroeBD(unIdHeroe: string) {
   await this.databd
     .getUnHeroe(unIdHeroe)
     .toPromise()
     .then((data: any) => {
       this.otroDato = data.resp;
       console.log('OTRODATO',this.otroDato);
     });
 }


 ngOnInit() {
 }

}
