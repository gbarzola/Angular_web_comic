import { Component } from '@angular/core'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent{
  frase: any = {
    mensaje: "Piensa que estas vencido, lo estas",
    autor: "Barnard"
  };

  mostrar: true;

  personajes: string[] =['hulk','thor','ironman'];

}