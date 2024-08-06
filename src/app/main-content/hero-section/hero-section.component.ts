import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss'
})
export class HeroSectionComponent implements OnInit{

  email: string = "contact@daniel-lehmann.dev"

  scrollDownArrow: string[] = [
    '/assets/icons/animations/scroll-down/arrow-down1.png',
    '/assets/icons/animations/scroll-down/arrow-down2.png',
    '/assets/icons/animations/scroll-down/arrow-down3.png',
    '/assets/icons/animations/scroll-down/arrow-down4.png',
    '/assets/icons/animations/scroll-down/arrow-down5.png',
    '/assets/icons/animations/scroll-down/arrow-down6.png',
    '/assets/icons/animations/scroll-down/arrow-down7.png',
  ];

  currentIndex: number = 0;
  currentImage: string = this.scrollDownArrow[this.currentIndex]

  ngOnInit(): void {
    this.arrowAnimation();
  }
  
  arrowAnimation(){
    let animationId = setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.scrollDownArrow.length;
      this.currentImage = this.scrollDownArrow[this.currentIndex];      
    }, 125);
  }
}
