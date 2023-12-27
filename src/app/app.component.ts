import { NgFor, NgIf } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import {slideTilesUp, slideTilesLeft, genNewTile, slideTilesDown, slideTilesRight} from '../utils/tile-manip';
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
    this.tiles = genNewTile(this.tiles)
  }

  title = '2048';

  handleUp() {
    this.tiles = slideTilesUp(this.tiles)
  }

  handleLeft() {
    this.tiles = slideTilesLeft(this.tiles)
  }

  handleDown() {
    this.tiles = slideTilesDown(this.tiles)
  }

  handleRight() {
    this.tiles = slideTilesRight(this.tiles)
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
