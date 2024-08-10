import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-contact-section',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './contact-section.component.html',
  styleUrl: './contact-section.component.scss'
})
export class ContactSectionComponent implements OnInit {


  constructor(){}


  contact: any = {
    name: '',
    email: '',
    message: ''
  }

  ngOnInit(): void {
    setInterval(() => {
      console.log(this.contact.message)
    },500)
  }

  onBlur(field: NgModel){
    if(field.untouched){
      field.control.markAsTouched();
    }
  }
}
