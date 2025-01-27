import { Component } from '@angular/core';
import { DbzService } from '../services/dbz.service';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
  standalone:false
})

export class MainPageComponent  {

  constructor( private dbzService: DbzService){}
  //inyeccion de dependencias, en todo mi componente voy a tener los valores DbzService
  //dbzService lo hacemos privado para que no lo podamos cambiar de ningun sitio nada mas q del servicio

  get characters():Character[] {
    return [... this.dbzService.characters]; //me devuelve una copia de cada uno de los personajes q tengo
  }

  onDeleteCharacter( id: string):void {
    this.dbzService.deleteCharacterById( id );
  }

  onNewCharacter( character:Character):void{
    this.dbzService.addCharacter(character);

  }
}
