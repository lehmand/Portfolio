import { Component, OnDestroy, OnInit } from '@angular/core';
import { LanguageService } from '../../shared/language.service';
import { Subscription } from 'rxjs';
import { ABOUTMETRANSLATIONS } from '../../shared/translations';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about-me-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-me-section.component.html',
  styleUrl: './about-me-section.component.scss',
})
export class AboutMeSectionComponent implements OnInit, OnDestroy {
  isAnimated: boolean = false;
  mobileArrowToLeft: string[] = [
    '/assets/icons/arrow-mobile/arrow-to-left/first-arrow-toleft.png',
    '/assets/icons/arrow-mobile/arrow-to-left/second-arrow-toleft.png',
    '/assets/icons/arrow-mobile/arrow-to-left/third-arrow-toleft.png',
  ];
  arrowToLeft: string[] = [
    '/assets/icons/animations/arrow-to-left/arrow-to-left1.png',
    '/assets/icons/animations/arrow-to-left/arrow-to-left2.png',
    '/assets/icons/animations/arrow-to-left/arrow-to-left3.png'
  ]
  currentIndex: number = 2;
  currentImage: string = this.mobileArrowToLeft[this.currentIndex];
  isMobile: boolean = window.innerWidth <= 767;
  translations: any = {};
  private animationId: any;
  private langSub: Subscription | undefined;

  constructor(private lang: LanguageService) {}

  ngOnInit(): void {
    this.langSub = this.lang.german$.subscribe((isGerman) => {
      this.translations = isGerman
        ? ABOUTMETRANSLATIONS.de
        : ABOUTMETRANSLATIONS.en;
    });
    this.translations = this.lang.isGerman()
      ? ABOUTMETRANSLATIONS.de
      : ABOUTMETRANSLATIONS.en;
    window.addEventListener('resize', this.resizeHandler);
    window.addEventListener('resize', () => {
      this.currentIndex = this.isMobile ? 2 : 0
      this.currentImage = this.isMobile ? this.mobileArrowToLeft[this.currentIndex] : this.arrowToLeft[this.currentIndex]
    })
  }

  ngOnDestroy(): void {
    if (this.langSub) {
      this.langSub.unsubscribe();
    }
  }

  resizeHandler = () => {
    this.isMobile = window.innerWidth <= 767;
  }

  toggleAnimation() {
    this.isAnimated = !this.isAnimated;
    this.playAnimation();
  }

  playAnimation() {
    const animationId = setInterval(() => {
      this.currentIndex =
        (this.currentIndex + 1) % this.arrowToLeft.length;
      this.currentImage = this.arrowToLeft[this.currentIndex];
      if (this.currentIndex === 2) {
        clearInterval(animationId);
      }
    }, 125);
  }

  resetAnimation() {
    clearInterval(this.animationId);
    this.currentIndex = 0;
    this.currentImage = this.arrowToLeft[this.currentIndex];
  }
}
