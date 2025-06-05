import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { trigger, state, animate, style, transition } from '@angular/animations';
import { LanguageService } from '../../shared/language.service';
import { Subscription } from 'rxjs';
import { MYSKILLSTRANSLATIONS } from '../../shared/translations';
import { skills } from '../../shared/skills';

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
  arrowToRight: string[] = [
    '/assets/icons/animations/arrow-to-right/arrow-to-right1.png',
    '/assets/icons/animations/arrow-to-right/arrow-to-right2.png',
    '/assets/icons/animations/arrow-to-right/arrow-to-right3.png',
  ];
  currentIndex: number = 0;
  currentImage: string = this.arrowToRight[this.currentIndex];
  translations: any = {}
  skills: Array<any> = []
  isGerman: boolean = false;
  private animationId: any;
  private langSub: Subscription | undefined;

  constructor(private lang: LanguageService) {}



  ngOnInit(): void {
    this.langSub = this.lang.german$.subscribe(isGerman => {
      this.isGerman = isGerman;
      this.translations = isGerman ? MYSKILLSTRANSLATIONS.de : MYSKILLSTRANSLATIONS.en;
    });
    this.isGerman = this.lang.isGerman();
    this.translations = this.lang.isGerman() ? MYSKILLSTRANSLATIONS.de : MYSKILLSTRANSLATIONS.en;
    this.skills = skills
  }

  ngOnDestroy(): void {
    if (this.langSub) {
      this.langSub.unsubscribe();
    }
  }

  playAnimation() {
    this.animationId = setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.arrowToRight.length;
      this.currentImage = this.arrowToRight[this.currentIndex];
      if(this.currentIndex === 2){
        clearInterval(this.animationId);
      }
    }, 75);
  }

  resetAnimation(){
    this.currentIndex = 0;
    this.currentImage = this.arrowToRight[this.currentIndex];
  }

  animate(index: number) {
    this.skills[index].status = 'animated';
  }

  animationDone(index: number) {
    setTimeout(() => {
      this.skills[index].status = 'initial';
    },250)
  }
}
