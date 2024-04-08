import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesBDService } from 'src/app/services/heroes-bd.service';

@Component({
  selector: 'app-det-fotos',
  templateUrl: './det-fotos.page.html',
  styleUrls: ['./det-fotos.page.scss'],
})
export class DetFotosPage implements OnInit {
  unId!:any;
  unasFotosHeroe!:any;
  
 constructor(route: ActivatedRoute,
   //data:HeroesServiceService
   private databd:HeroesBDService
   ) {
   this.unId = route.snapshot.params["id"];
   console.log('MONGOID',this.unId);

   //this.unHeroe = data.getUnHeroe(this.unId);
   //console.log(this.unHeroe);

   this.getUnasFotosHeroeBD(this.unId);

  }

  ngOnInit() {
  }

  async getUnasFotosHeroeBD(unIdHeroe: string) {
    await this.databd
      .getFotosHeroe(unIdHeroe)
      .toPromise()
      .then((data: any) => {
        this.unasFotosHeroe = data.resp;
        console.log(this.unasFotosHeroe);
      });
  }


}
