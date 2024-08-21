import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  constructor() { }

  isGerman: boolean = false;

  checkLanguage(){
    return this.isGerman;
  }

  toggleLanguage(){
    this.isGerman = !this.isGerman;
    console.log(this.isGerman);
  }
}
