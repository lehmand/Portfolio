import { CommonModule, JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, NgModel, NgForm } from '@angular/forms';
import { trigger, animate, transition, style } from '@angular/animations';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { first, firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-contact-section',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './contact-section.component.html',
  styleUrl: './contact-section.component.scss',
  animations: [
    trigger('slide', [
      transition(':enter', [
        style({ height: '0px', opacity: 0 }),
        animate('125ms ease-in-out', style({ height: '*', opacity: 100 })),
      ]),
      transition(':leave', [
        animate('125ms ease-in-out', style({ height: '0px', opacity: 0 })),
      ]),
    ]),
  ],
})
export class ContactSectionComponent implements OnInit {

  isChecked: boolean = false;
  mobileButton: string = 'Say hello ;)';
  submitMessage: string = '';
  
  constructor(private http: HttpClient) {}
  
  contact: any = {
    name: '',
    email: '',
    message: '',
  };
  
  
  ngOnInit(): void {}

  url: string = 'https://daniel-lehmann.dev/sendMail.php';

  async onSubmit(form: NgForm){
    if(form.valid){
      try {
        const response = await firstValueFrom(this.http.post<any>(this.url, this.contact));
        if(response.status === 'success'){
          this.submitMessage = 'Message sent! I answer as soon as possible :)';
          form.resetForm();
        } else {
          this.submitMessage = `Error: ${response.message}`;
        }
      } catch (err) {
        console.error('Something went wrong...', err);
      }
    }
  }
  
  onBlur(field: NgModel) {
    if (field.untouched) {
      field.control.markAsTouched();
    }
  }

  toggleCheck(){
    this.isChecked = !this.isChecked;
  }

}
