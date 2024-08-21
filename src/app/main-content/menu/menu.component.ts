import { CommonModule, ViewportScroller } from '@angular/common';
import { Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import { RouterLink } from '@angular/router';
import { LanguageService } from '../../shared/language.service';
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

  isGerman: boolean = false;
  currentLanguage: Language = 'en';
  translations = POPUPTRANSLATIONS[this.currentLanguage];
  
  constructor(private lang: LanguageService){
    this.isGerman = this.lang.isGerman();
  }

  private langSub: Subscription | undefined;
  @Output() linkClicked = new EventEmitter<void>();

  ngOnInit(): void {
    this.langSub = this.lang.german$.subscribe(isGerman => {
      this.isGerman = isGerman;
      this.translations = isGerman ? POPUPTRANSLATIONS.de : POPUPTRANSLATIONS.en;
    });
    this.isGerman = this.lang.isGerman();
    this.translations = this.isGerman ? POPUPTRANSLATIONS.de : POPUPTRANSLATIONS.en;
  }

  ngOnDestroy(): void {
    if (this.langSub) {
      this.langSub.unsubscribe();
    }
  }

  onLinkClicked(){
    this.linkClicked.emit();
  }

}
