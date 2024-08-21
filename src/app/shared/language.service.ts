import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  constructor() { }

  private germanSubject = new BehaviorSubject<boolean>(false);
  german$ = this.germanSubject.asObservable();

  toggleLanguage() {
    const newLanguageStatus = !this.germanSubject.value;
    this.germanSubject.next(newLanguageStatus);
  }

  isGerman() {
    return this.germanSubject.value;
  }
}
