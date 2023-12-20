import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

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
    2, 4, 0, 0,
    2, 4, 0, 0,
    2, 4, 0, 0,
  ]

}
