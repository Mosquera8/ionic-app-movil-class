import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeroeBD } from 'src/app/interfaces/heroes.interface';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent  implements OnInit {

  @Input() unosHeroes: HeroeBD[] = [];
  //@Input() tipo!: string;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {}

 

}
