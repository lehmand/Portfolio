import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me-section',
  standalone: true,
  imports: [],
  templateUrl: './about-me-section.component.html',
  styleUrl: './about-me-section.component.scss',
})
export class AboutMeSectionComponent {
  constructor() {}

  isAnimated: boolean = false;

  arrowToLeft: string[] = [
    '/assets/icons/animations/arrow-to-left/arrow-to-left1.png',
    '/assets/icons/animations/arrow-to-left/arrow-to-left2.png',
    '/assets/icons/animations/arrow-to-left/arrow-to-left3.png',
  ];

  currentIndex: number = 0;
  currentImage: string = this.arrowToLeft[this.currentIndex];

  toggleAnimation() {
    this.isAnimated = !this.isAnimated;
    this.playAnimation();
  }

  playAnimation() {
    const animationId = setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.arrowToLeft.length;
      this.currentImage = this.arrowToLeft[this.currentIndex];
      if(this.currentIndex === 2){
        clearInterval(animationId);
      }
    }, 125);

  }
}
