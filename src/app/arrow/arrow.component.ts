import { Component, inject, Inject, Input, OnInit } from '@angular/core';
import { MobileService } from '../services/mobile-service/mobile.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-arrow',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './arrow.component.html',
  styleUrl: './arrow.component.scss'
})
export class ArrowComponent implements OnInit {

  leftArrow: string = 'assets/icons/arrow-mobile/arrow-to-left/first-arrow-toleft.png'
  rightArrow: string = 'assets/icons/arrow-mobile/arrow-to-right/first-arrow-toright.png'
  mobileService = inject(MobileService)
  @Input() direction: 'left' | 'right' = 'left';
  initialArrow: string = '';

  constructor() {

  }

  ngOnInit(): void {
    this.initialArrow = this.direction === 'left' ? this.leftArrow : this.rightArrow;
  }

}
