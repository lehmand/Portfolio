import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { LanguageService } from '../../services/language-service/language.service';
import { Subscription } from 'rxjs';
import { ABOUTMETRANSLATIONS } from '../../shared/translations';
import { CommonModule } from '@angular/common';
import { ImageService } from '../../services/image-service/image.service';

@Component({
  selector: 'app-about-me-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-me-section.component.html',
  styleUrl: './about-me-section.component.scss',
})
export class AboutMeSectionComponent implements OnInit, OnDestroy {
  
  translations: any = {};
  private langSub: Subscription | undefined;
  public imgService = inject(ImageService)

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
      this.imgService.currentIndex = this.imgService.isMobile ? 2 : 0;
      this.imgService.currentImage = this.imgService.isMobile
        ? this.imgService.mobileArrowToLeft[this.imgService.currentIndex]
        : this.imgService.arrowToLeft[this.imgService.currentIndex];
    });
  }

  ngOnDestroy(): void {
    if (this.langSub) {
      this.langSub.unsubscribe();
    }
  }

  resizeHandler = () => {
    this.imgService.isMobile = window.innerWidth <= 767;
  };

  toggleAnimation() {
    this.imgService.isAnimated = !this.imgService.isAnimated;
    this.playAnimation();
  }

  playAnimation() {
    const animationId = setInterval(() => {
      this.imgService.currentIndex = (this.imgService.currentIndex + 1) % this.imgService.arrowToLeft.length;
      this.imgService.currentImage = this.imgService.arrowToLeft[this.imgService.currentIndex];
      if (this.imgService.currentIndex === 2) {
        clearInterval(animationId);
      }
    }, 125);
  }

  resetAnimation() {
    clearInterval(this.imgService.animationId);
    this.imgService.currentIndex = 0;
    this.imgService.currentImage = this.imgService.arrowToLeft[this.imgService.currentIndex];
  }
}
