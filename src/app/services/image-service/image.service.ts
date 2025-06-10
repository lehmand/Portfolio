import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ImageService {
  isAnimated: boolean = false;
  mobileArrowToLeft: string[] = [
    '/assets/icons/arrow-mobile/arrow-to-left/first-arrow-toleft.png',
    '/assets/icons/arrow-mobile/arrow-to-left/second-arrow-toleft.png',
    '/assets/icons/arrow-mobile/arrow-to-left/third-arrow-toleft.png',
  ];
  arrowToLeft: string[] = [
    '/assets/icons/animations/arrow-to-left/arrow-to-left1.png',
    '/assets/icons/animations/arrow-to-left/arrow-to-left2.png',
    '/assets/icons/animations/arrow-to-left/arrow-to-left3.png',
  ];
  currentIndex: number = 2;
  currentImage: string = this.mobileArrowToLeft[this.currentIndex];
  isMobile: boolean = window.innerWidth <= 767;
  public animationId: any;

  constructor() {}
}
