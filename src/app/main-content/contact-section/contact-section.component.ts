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
  
  constructor(private http: HttpClient) {}
  
  contact: any = {
    name: 'Daniel',
    email: 'daniel@dnaile.de',
    message: 'SDLKFJDLKJFDSKJLKFjSLDSJKLJKFLJFLKJFDSKLJDFSlSFJKLFJSKLFJLFJDSKLFDJSKLFDSDJSLFDSJSKLFDSJLFSDDJSLfDSJLDSF',
  };
  
  
  ngOnInit(): void {}

  post = {
    endPoint: 'https://daniel-lehmann.dev/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid) {
      this.http.post(this.post.endPoint, this.post.body(this.contact))
        .subscribe({
          next: (response) => {
            console.log(response);
            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
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
