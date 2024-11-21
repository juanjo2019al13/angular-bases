import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Input()
  public characterList: Character[] = [{
    name: 'Trunks',
    power: 10
  }];

  @Output()
  public onDeleteIndex: EventEmitter<number> = new EventEmitter()

  @Output()
  public onDeleteById: EventEmitter<string> = new EventEmitter()

  constructor(){}

  onDeleteCharacter(index: number): void{
    this.onDeleteIndex.emit(index);
  }

  onDeleteCharacterById(id: string | undefined): void{
    this.onDeleteById.emit(id);
  }

}
