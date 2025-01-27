

import { Injectable } from '@angular/core';
import { v4 as uuid } from "uuid";//cambio el nombre v4 a uuid (es para generar id unicos)

//console.log(v4())

import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})

export class DbzService {
  public characters: Character[] = [{
    id: uuid(),
    name: 'Krillin',
    power: 1000
  },{
    id: uuid(),
    name:'Goku',
    power: 9500
  },{
    id: uuid(),
    name:'Vegeta',
    power: 7500
  }];

  addCharacter( character:Character ):void{ //crear un nuevo elemento

    const newCharacter : Character = { id: uuid(), ...character}//'...character coge todas sus propiedades y las pasa en la nueva constante'
    this.characters.push(newCharacter);
    // const newCharacter:Character={ //esto es una forma de hacerlo
    //   id: uuid(),
    //   name: character.name,
    //   power: character.power
    //}
    //this.characters.unshift() agrega el valor al inicio del arrya
    //this.characters.push(character); //agrega el valor al final del array
    // console.log('MainPage');
    // console.log(character);
  }
  // onDeleteCharacter(index:number):void{
  //   //console.log('MainPage - index:' ,index);
  //   this.characters.splice(index,1);
  // }

  deleteCharacterById( id:string ){
    this.characters = this.characters.filter( character => character.id !== id );
  }


}
