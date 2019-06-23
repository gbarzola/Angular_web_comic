import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  name: string;
  nombre: string;
  apellido: string;

  constructor() {
    this.name = 'Mundo';
    this.nombre = 'Gerardo';
    this.apellido = 'Barzola';
  }

  ngOnInit() {
  }

}