import { CommonModule, ViewportScroller } from '@angular/common';
import { Component, EventEmitter, Output} from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent {

  @Output() linkClicked = new EventEmitter<void>();

  constructor(){}

  onLinkClicked(){
    this.linkClicked.emit();
  }

}
