import { Component, OnInit } from '@angular/core'
import { HeroesService, Heroe } from '../../services/heroes.service'
import { Router } from '@angular/router'


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit{
  
  heroes:any[] = [];
  
  frase: any = {
    mensaje: "Piensa que estas vencido, lo estas",
    autor: "Barnard"
  };

  mostrar: true;

  personajes: string[] =['hulk','thor','ironman'];

  constructor (
    private _heroesService:HeroesService,
    private router:Router){}

  ngOnInit(){
    this.heroes = this._heroesService.getHeroes();
    console.log(this.heroes);

  }

  verHeroe(idx:number){
    this.router.navigate(['/heroe',idx]);
  }
}