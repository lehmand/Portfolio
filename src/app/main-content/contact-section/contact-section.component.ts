import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';
import { trigger, state, animate, transition, style } from '@angular/animations';

@Component({
  selector: 'app-contact-section',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './contact-section.component.html',
  styleUrl: './contact-section.component.scss',
  animations: [
    trigger('slide', [
      transition(':enter', [
        style({height: '0px', opacity: 0}),
        animate('125ms ease-in-out', style({height: '*', opacity: 100}))
      ]), 
      transition(':leave', [
        animate('125ms ease-in-out', style({height: '0px', opacity: 0}))
      ])
    ])
  ]
})
export class ContactSectionComponent implements OnInit {


  constructor(){}

  contact: any = {
    name: '',
    email: '',
    message: '',
    checkbox: ''
  }

  ngOnInit(): void {

  }

  onBlur(field: NgModel){
    if(field.untouched){
      field.control.markAsTouched();
    }
  }
}
