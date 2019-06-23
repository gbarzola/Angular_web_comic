import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

//Rutas
import { APP_ROUTING } from './app.routes';

//Servicios

import { HeroesService } from './services/heroes.service';

//Componentes

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { HeroeComponent } from './components/heroe/heroe.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule, APP_ROUTING ],

  declarations: [ AppComponent, HelloComponent, HeaderComponent, HeroesComponent, FooterComponent, AboutComponent, HomeComponent, HeroeComponent ],

  bootstrap:    [ AppComponent ],
  
  providers: [HeroesService]
})
export class AppModule { }
