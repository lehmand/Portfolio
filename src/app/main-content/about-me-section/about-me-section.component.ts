import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { LanguageService } from '../../services/language-service/language.service';
import { Subscription } from 'rxjs';
import { ABOUTMETRANSLATIONS } from '../../shared/translations';
import { CommonModule } from '@angular/common';
import { ArrowComponent } from '../../arrow/arrow.component';

@Component({
  selector: 'app-about-me-section',
  standalone: true,
  imports: [CommonModule, ArrowComponent],
  templateUrl: './about-me-section.component.html',
  styleUrl: './about-me-section.component.scss',
})
export class AboutMeSectionComponent implements OnInit, OnDestroy {
  
  translations: any = {};
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
  }

  ngOnDestroy(): void {
    if (this.langSub) {
      this.langSub.unsubscribe();
    }
  }
}
