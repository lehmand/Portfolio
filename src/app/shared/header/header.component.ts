import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from '../../main-content/menu/menu.component';
import { transition, trigger, style, animate } from '@angular/animations';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MenuComponent, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  animations: [
    trigger('slideUpdown', [
      transition('enter', [
        style({ transform: 'translateY(100%'}),
        animate('300ms ease-out', style({ transform: 'translateY(0%)' }))
      ]),
      transition(':leave', [
        animate('300ms ease-in', style ({ transform: 'translateY(100%)' }))
      ])
    ])
  ]
})
export class HeaderComponent {

  isMenuOpen: boolean = false;

  toggleMenu(){
    this.isMenuOpen = !this.isMenuOpen;
  }


}
