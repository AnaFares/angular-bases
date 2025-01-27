import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl:'./addCharacter.component.html',
  styleUrl: './addCharacter.component.css',
  standalone:false
})
export class AddCharacterComponent {
  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter(); //mi formulario que recoge datos los va a mandar al main-page que es donde rellenamos la lista con valores

  public character: Character = {
    name:'',
    power:0
  }
  emitCharacter():void {

    //debugger; //para parar la ejecucion justo en ese punto

    //console.log(this.character);

    if ( this.character.name.length === 0 ) return; //No queremos q nos devuelva un valor del nombre vacio

    this.onNewCharacter.emit(this.character);//queremos que nos devuelva un personaje (character)

    this.character = { name:'', power: 0 }; //esto hace lo mismo q las dos lineas de codigo de abajo
    //this.character.name=''; //esto lo q hace es q me borra las cajitas
    //this.character.power=0;
  }
}
