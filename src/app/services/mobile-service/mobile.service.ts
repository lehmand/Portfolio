import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, fromEvent } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MobileService {
  private isMobileSubject = new BehaviorSubject<boolean>(this.checkIsMobile());
  public isMobile$: Observable<boolean> = this.isMobileSubject.asObservable();

  constructor() {
    fromEvent(window, 'resize')
      .pipe(
        map(() => this.checkIsMobile()),
        startWith(this.checkIsMobile())
      )
      .subscribe(isMobile => this.isMobileSubject.next(isMobile));
  }

  private checkIsMobile(): boolean {
    return window.innerWidth <= 1023;
  }
}
