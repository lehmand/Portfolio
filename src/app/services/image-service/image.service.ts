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

  arrowToRight: string[] = [
    '/assets/icons/animations/arrow-to-right/arrow-to-right1.png',
    '/assets/icons/animations/arrow-to-right/arrow-to-right2.png',
    '/assets/icons/animations/arrow-to-right/arrow-to-right3.png',
  ];

  mobileArrowToRight: string[] = [
    '/assets/icons/arrow-mobile/arrow-to-right/first-arrow-toright.png',
    '/assets/icons/arrow-mobile/arrow-to-right/second-arrow-toright.png',
    '/assets/icons/arrow-mobile/arrow-to-right/third-arrow-toright.png',
  ];

  currentIndexLeft: number = 2;
  currentImageLeft: string = this.mobileArrowToLeft[this.currentIndexLeft];
  currentIndexRight: number = 2;
  currentImageRight: string = this.mobileArrowToRight[this.currentIndexRight];
  isMobile: boolean = window.innerWidth <= 767;
  public animationId: any;

  constructor() {}
}
