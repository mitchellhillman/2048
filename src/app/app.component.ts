import { NgFor, NgIf } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import {shiftTilesUp, shiftTilesLeft, genNewTiles} from '../utils/tile-manip';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NgFor,
    NgIf
  ],
  templateUrl: `./app.component.html`,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  
  tiles:number[] = [
    0,0,0,0,
    0,0,0,0,
    0,0,0,0,
    0,0,0,0,
  ]

  constructor() {
    this.tiles = genNewTiles(this.tiles)
  }

  title = '2048';


  handleUp() {
    console.log('UP')
    this.tiles = shiftTilesUp(this.tiles)
  }

  handleLeft() {
    console.log('LEFT')
    this.tiles = shiftTilesLeft(this.tiles)
  }

  handleDown() {
    console.log('DOWN')
  }

  handleRight() {
    console.log('RIGHT')
  }

  @HostListener('document:keydown', ['$event']) 
  handleKeyboardEvent({key}: KeyboardEvent) {
    switch(key) {
      case 'ArrowUp':
         this.handleUp()
         return;
      case 'ArrowLeft':
         this.handleLeft()
         return;
      case 'ArrowDown':
         this.handleDown()
         return;
      case 'ArrowRight':
         this.handleRight()
         return;
      case 'w':
         this.handleUp()
         return;
      case 'a':
         this.handleLeft()
         return;
      case 's':
         this.handleDown()
         return;
      case 'd':
         this.handleRight()
         return;
      default: 
         return;
    }
  }
}
