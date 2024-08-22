import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { LanguageService } from '../../shared/language.service';
import { Subscription } from 'rxjs';
import { HEROSECTIONTRANSLATIONS } from '../../shared/translations';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss',
})
export class HeroSectionComponent {

  constructor(public lang: LanguageService){}

  private langSub: Subscription | undefined;
  
  email: string = 'contact@daniel-lehmann.dev';
  translations: any = {};

  ngOnInit(): void {
    this.langSub = this.lang.german$.subscribe(isGerman => {
      this.translations = isGerman ? HEROSECTIONTRANSLATIONS.de : HEROSECTIONTRANSLATIONS.en;
    });
    this.translations = this.lang.isGerman() ? HEROSECTIONTRANSLATIONS.de : HEROSECTIONTRANSLATIONS.en;
  }

  ngOnDestroy(): void {
    if (this.langSub) {
      this.langSub.unsubscribe();
    }
  }
}

