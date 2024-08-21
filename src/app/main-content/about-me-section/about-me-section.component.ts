import { Component, OnDestroy, OnInit } from '@angular/core';
import { LanguageService } from '../../shared/language.service';
import { Subscription } from 'rxjs';
import { ABOUTMETRANSLATIONS } from '../../shared/translations';

@Component({
  selector: 'app-about-me-section',
  standalone: true,
  imports: [],
  templateUrl: './about-me-section.component.html',
  styleUrl: './about-me-section.component.scss',
})
export class AboutMeSectionComponent implements OnInit, OnDestroy {
  constructor(private lang: LanguageService) {}

  isAnimated: boolean = false;
  arrowToLeft: string[] = [
    '/assets/icons/animations/arrow-to-left/arrow-to-left1.png',
    '/assets/icons/animations/arrow-to-left/arrow-to-left2.png',
    '/assets/icons/animations/arrow-to-left/arrow-to-left3.png',
  ];
  currentIndex: number = 0;
  currentImage: string = this.arrowToLeft[this.currentIndex];
  private animationId: any;
  private langSub: Subscription | undefined;

  translations: any = {};

  ngOnInit(): void {
    this.langSub = this.lang.german$.subscribe(isGerman => {
      this.translations = isGerman ? ABOUTMETRANSLATIONS.de : ABOUTMETRANSLATIONS.en;
    });
    this.translations = this.lang.isGerman() ? ABOUTMETRANSLATIONS.de : ABOUTMETRANSLATIONS.en;
  }

  ngOnDestroy(): void {
    if (this.langSub) {
      this.langSub.unsubscribe();
    }
  }
 
 
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

  resetAnimation() {
    clearInterval(this.animationId);
    this.currentIndex = 0;
    this.currentImage = this.arrowToLeft[this.currentIndex];
  }
}
