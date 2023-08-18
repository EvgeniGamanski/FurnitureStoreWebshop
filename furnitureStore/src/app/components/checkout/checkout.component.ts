import { animate, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

const enterTransition = transition(':enter',[
  style({
    opacity: 0
  }),
  animate('2s ease-in', style({opacity: 1})),
])
const fadeIn = trigger('fadeIn', [enterTransition])

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
  animations: [fadeIn],
})
export class CheckoutComponent {

}
