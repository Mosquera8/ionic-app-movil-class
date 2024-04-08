import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeroeBD } from 'src/app/interfaces/heroes.interface';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.scss'],
})
export class HeroeComponent  implements OnInit {
 
  @Input() unHeroe!: HeroeBD;

  constructor(private router: Router) { }

  ngOnInit() {}

  navegarHeroe(unId:any){
    this.router.navigate(['/det-heroe1',unId])
  }  

  navegarFotosHeroe(unId:any){
    this.router.navigate(['/det-fotos',unId])
  }  

}
