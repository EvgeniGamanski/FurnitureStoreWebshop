import { Component } from '@angular/core';
import { UserService } from 'src/app/user.service';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('slideInLeft', [
      transition(':enter', [
        style({ transform: 'translateX(-100%)' }),
        animate('1s ease-out', style({ transform: 'translateX(0)' })),
      ]),
      transition(":leave", [
        animate('1s ease-out', style({ transform: 'translateX(-100%)' })),
      ])
    ])
  ],
})
export class HomeComponent {
  constructor(public user:UserService){}
}
