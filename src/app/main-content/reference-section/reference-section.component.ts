import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-reference-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reference-section.component.html',
  styleUrl: './reference-section.component.scss'
})
export class ReferenceSectionComponent {

  references: any = [
    {
      name: 'V.Schuster',
      position: 'Team Partner',
      refText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt sed sapiente ex harum omnis explicabo dolor fugit ipsam cum a.'
    },
    {
      name: 'E.Eichinger',
      position: 'Team Partner',
      refText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt sed sapiente ex harum omnis explicabo dolor fugit ipsam cum a.'
    },
    {
      name: 'I.Nuber',
      position: 'Team Partner',
      refText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt sed sapiente ex harum omnis explicabo dolor fugit ipsam cum a.'
    },
    
  ]
}
