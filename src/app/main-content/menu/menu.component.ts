import { CommonModule, ViewportScroller } from '@angular/common';
import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { RouterLink, Router, ActivatedRoute } from '@angular/router';
import { LanguageService } from '../../services/language-service/language.service';
import { Subscription } from 'rxjs';
import { POPUPTRANSLATIONS } from '../../shared/translations';

type Language = 'en' | 'de';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent implements OnInit, OnDestroy {
  constructor(
    private lang: LanguageService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.isGerman = this.lang.isGerman();
  }

  isGerman: boolean = false;
  currentLanguage: Language = 'en';
  translations = POPUPTRANSLATIONS[this.currentLanguage];

  private langSub: Subscription | undefined;
  @Output() linkClicked = new EventEmitter<void>();

  ngOnInit(): void {
    this.langSub = this.lang.german$.subscribe((isGerman) => {
      this.isGerman = isGerman;
      this.translations = isGerman
        ? POPUPTRANSLATIONS.de
        : POPUPTRANSLATIONS.en;
    });
    this.isGerman = this.lang.isGerman();
    this.translations = this.isGerman
      ? POPUPTRANSLATIONS.de
      : POPUPTRANSLATIONS.en;
  }

  ngOnDestroy(): void {
    if (this.langSub) {
      this.langSub.unsubscribe();
    }
  }

  onLinkClicked(fragment: string) {
    this.linkClicked.emit();
    this.router.navigate(['/'], { fragment: fragment }).then(() => {
      setTimeout(() => {
        const element = document.getElementById(fragment);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    });
  }

  getFontSize(): string {
    if (this.isGerman && window.innerHeight <= 700) {
      return '24px';
    }
    return '32px';
  }
}
