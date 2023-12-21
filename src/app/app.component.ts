import { NgFor, NgIf } from '@angular/common';
import { Component, HostListener } from '@angular/core';
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
  title = '2048';

  cells = [
    2, 4, 0, 0,
    0, 0, 4, 0,
    2, 4, 0, 0,
    2, 4, 0, 0,
  ]

  moveUp() {
    console.log('UP')
  }

  moveLeft() {
    console.log('LEFT')
  }

  moveDown() {
    console.log('DOWN')
  }

  moveRight() {
    console.log('RIGHT')
  }

  @HostListener('document:keydown', ['$event']) 
  handleKeyboardEvent({key}: KeyboardEvent) {
    switch(key) {
      case 'ArrowUp':
         this.moveUp()
         return;
      case 'ArrowLeft':
         this.moveLeft()
         return;
      case 'ArrowDown':
         this.moveDown()
         return;
      case 'ArrowRight':
         this.moveRight()
         return;
      case 'w':
         this.moveUp()
         return;
      case 'a':
         this.moveLeft()
         return;
      case 's':
         this.moveDown()
         return;
      case 'd':
         this.moveRight()
         return;
      default: 
         return;
    }
  }
}
