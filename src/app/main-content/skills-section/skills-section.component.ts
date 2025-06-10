import { CommonModule } from '@angular/common';
import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import {
  trigger,
  state,
  animate,
  style,
  transition,
} from '@angular/animations';
import { LanguageService } from '../../services/language-service/language.service';
import { Subscription } from 'rxjs';
import { MYSKILLSTRANSLATIONS } from '../../shared/translations';
import { skills } from '../../shared/skills';
import { ImageService } from '../../services/image-service/image.service';

@Component({
  selector: 'app-skills-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills-section.component.html',
  styleUrl: './skills-section.component.scss',
  animations: [
    trigger('iconAnimation', [
      state('initial', style({ transform: 'translateX(0)', opacity: 1 })),
      state('animated', style({ transform: 'translateX(0)', opacity: 1 })),

      transition('initial => animated', [
        animate(
          '75ms ease-in-out',
          style({ transform: 'translateX(65%)', opacity: 0 })
        ),
        animate(
          '75ms ease-in-out',
          style({ transform: 'translateX(-65%)', opacity: 1 })
        ),
        animate(
          '75ms ease-in-out',
          style({ transform: 'translateX(0%)', opacity: 1 })
        ),
      ]),
    ]),
  ],
})
export class SkillsSectionComponent implements OnInit, OnDestroy {
  status: 'initial' | 'animated' = 'initial';
  
  translations: any = {};
  skills: Array<any> = [];
  isGerman: boolean = false;
  private animationId: any;
  private langSub: Subscription | undefined;
  public imgService = inject(ImageService)

  constructor(private lang: LanguageService) {}

  ngOnInit(): void {
    this.langSub = this.lang.german$.subscribe((isGerman) => {
      this.isGerman = isGerman;
      this.translations = isGerman
        ? MYSKILLSTRANSLATIONS.de
        : MYSKILLSTRANSLATIONS.en;
    });
    this.isGerman = this.lang.isGerman();
    this.translations = this.lang.isGerman()
      ? MYSKILLSTRANSLATIONS.de
      : MYSKILLSTRANSLATIONS.en;
    this.skills = skills;
  }

  ngOnDestroy(): void {
    if (this.langSub) {
      this.langSub.unsubscribe();
    }
  }

  playAnimation() {
    this.animationId = setInterval(() => {
      this.imgService.currentIndexRight = (this.imgService.currentIndexRight + 1) % this.imgService.arrowToRight.length;
      this.imgService.currentImageRight = this.imgService.arrowToRight[this.imgService.currentIndexRight];
      if (this.imgService.currentIndexRight === 2) {
        clearInterval(this.animationId);
      }
    }, 75);
  }

  resetAnimation() {
    this.imgService.currentIndexRight = 0;
    this.imgService.currentImageRight = this.imgService.arrowToRight[this.imgService.currentIndexRight];
  }

  animate(index: number) {
    this.skills[index].status = 'animated';
  }

  animationDone(index: number) {
    setTimeout(() => {
      this.skills[index].status = 'initial';
    }, 250);
  }
}
