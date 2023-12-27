import { NgFor, NgIf } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import {slideTilesUp, slideTilesLeft, genNewTile, slideTilesDown, slideTilesRight, tileDiff} from '../utils/tile-manip';
import constants from '../utils/constants';
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
  
  tiles:number[] = constants.BLANKBOARD
  diff:boolean[] = constants.NODIFF

  constructor() {
    this.tiles = genNewTile(this.tiles)
  }

  title = '2048';

  handleUp() {
    const newBoard = slideTilesUp(this.tiles)
    this.diff = tileDiff(this.tiles, newBoard)
    this.tiles = newBoard
  }

  handleLeft() {
    const newBoard = slideTilesLeft(this.tiles)
    this.diff = tileDiff(this.tiles, newBoard)
    this.tiles = newBoard
  }

  handleDown() {
    const newBoard = slideTilesDown(this.tiles)
    this.diff = tileDiff(this.tiles, newBoard)
    this.tiles = newBoard
  }

  handleRight() {
    const newBoard = slideTilesRight(this.tiles)
    this.diff = tileDiff(this.tiles, newBoard)
    this.tiles = newBoard
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
