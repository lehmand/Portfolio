import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-section',
  standalone: true,
  imports: [FormsModule],
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
}
