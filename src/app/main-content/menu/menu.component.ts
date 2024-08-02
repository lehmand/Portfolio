import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
  animations: [
    trigger('slideUpDown', [
      transition(':enter', [
        style({ transform: 'translateY(100%)' }),
        animate('300ms ease-out', style({ transform: 'translateY(0%)' }))
      ]),
      transition(':leave', [
        animate('300ms ease-in', style({ transform: 'translateY(100%)' }))
      ])
    ])
  ]
})
export class MenuComponent {

  
  
}
