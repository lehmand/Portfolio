import { Component, OnDestroy, OnInit } from '@angular/core';
import { LanguageService } from '../language.service';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-legal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './legal.component.html',
  styleUrl: './legal.component.scss'
})
export class LegalComponent implements OnInit, OnDestroy {

  constructor(private lang: LanguageService){}

  private langSub: Subscription | undefined;
  isGerman: boolean = false;

  ngOnInit(): void {
    this.langSub = this.lang.german$.subscribe(isGerman => {
      this.isGerman = isGerman;
    });
    this.isGerman = this.lang.isGerman();
  }

  ngOnDestroy(): void {
    if (this.langSub) {
      this.langSub.unsubscribe();
    }
  }
}
