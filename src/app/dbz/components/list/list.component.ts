import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
  standalone: false
})
export class ListComponent {

  @Input()//pasamos la información del padre al hijo (padre: MainPageComponent)
  public characterList: Character[] = [{
    name: 'Trunks',
    power: 10
  }]

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  onDeleteCharacter(id?: string):void{
    if ( !id ) return;
    //console.log({id});
    this.onDelete.emit(id);
  }
}
