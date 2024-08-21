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
  
  constructor(private lang: LanguageService){
    
  }

  private langSub: Subscription | undefined;
  @Output() linkClicked = new EventEmitter<void>();

  currentLanguage: Language = 'en';
  translations = POPUPTRANSLATIONS[this.currentLanguage];



  ngOnInit(): void {
    this.langSub = this.lang.german$.subscribe(isGerman => {
      this.translations = isGerman ? POPUPTRANSLATIONS.de : POPUPTRANSLATIONS.en;
    });
    this.translations = this.lang.isGerman() ? POPUPTRANSLATIONS.de : POPUPTRANSLATIONS.en;
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
