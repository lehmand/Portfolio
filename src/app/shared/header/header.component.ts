import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  
  constructor(){}

  logo: string = '/assets/img/logo.png'
  burger: string = '/assets/icons/burger/burger1.png'
}
