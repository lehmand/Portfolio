import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from '../../main-content/menu/menu.component';
import { transition, trigger, style, animate } from '@angular/animations';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MenuComponent, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  animations: [
    trigger('slideUpDown', [
      transition(':enter', [
        style({ transform: 'translateY(100%)' }),
        animate('250ms ease-out', style({ transform: 'translateY(0%)' }))
      ]),
      transition(':leave', [
        animate('250ms ease-in', style({ transform: 'translateY(100%)' }))
      ])
    ])
  ]
})
export class HeaderComponent {

  isMenuOpen: boolean = false;
  burgerImages: string[] = [
    '/assets/icons/burger/burger1.png',
    '/assets/icons/burger/burger2.png',
    '/assets/icons/burger/burger3.png',
    '/assets/icons/burger/burger4.png',
    '/assets/icons/burger/burger5.png',
    '/assets/icons/burger/burger6.png',
    '/assets/icons/burger/burger7.png',
    '/assets/icons/burger/burger8.png'
  ];
  currentIndex: number = 0;
  currentImage: string = this.burgerImages[this.currentIndex];

  constructor(){

  }  

  toggleMenu(){
    this.isMenuOpen = !this.isMenuOpen;
    this.playBurgerAnimation()
  }

  playBurgerAnimation(){
    let animationId = setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.burgerImages.length;
      this.currentImage = this.burgerImages[this.currentIndex];
      if(this.currentIndex % this.burgerImages.length === 0){
        clearInterval(animationId)
      }
    }, 50);
  }

}
