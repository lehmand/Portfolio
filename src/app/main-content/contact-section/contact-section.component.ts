import { CommonModule } from '@angular/common';
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
  isSubmitting: boolean = false;
  submitMessage: string = '';
  
  constructor(private http: HttpClient) {}
  
  contact: any = {
    name: 'Daniel',
    email: 'daniel@dnaile.de',
    message: 'SDLKFJDLKJFDSKJLKFjSLDSJKLJKFLJFLKJFDSKLJDFSlSFJKLFJSKLFJLFJDSKLFDJSKLFDSDJSLFDSJSKLFDSJLFSDDJSLfDSJLDSF',
  };
  
  
  ngOnInit(): void {}

  url: string = 'https://daniel-lehmann.dev/sendMail.php'

  async onSubmit(form: NgForm) {
    if(form.valid){
      const response = await firstValueFrom(this.http.post(this.url, this.contact));
      console.log('This is the response', response);
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
