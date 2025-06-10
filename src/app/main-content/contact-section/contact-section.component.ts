import { CommonModule, JsonPipe } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormsModule, NgModel, NgForm } from '@angular/forms';
import { trigger, animate, transition, style } from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom, Subscription } from 'rxjs';
import { CONTACTTRANSLATIONS } from '../../shared/translations';
import { LanguageService } from '../../services/language-service/language.service';
import { RouterModule } from '@angular/router';

type Language = 'en' | 'de';

@Component({
  selector: 'app-contact-section',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
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
export class ContactSectionComponent implements OnInit, OnDestroy {
  currentLanguage: Language = 'en';
  translations = CONTACTTRANSLATIONS[this.currentLanguage];

  isChecked: boolean = false;
  mobileButton: string = 'Say hello ;)';
  submitMessage: string = '';

  constructor(private http: HttpClient, private lang: LanguageService) {}

  private langSub: Subscription | undefined;

  contact: any = {
    name: '',
    email: '',
    message: '',
  };

  isGerman: boolean = false;

  ngOnInit(): void {
    this.langSub = this.lang.german$.subscribe((isGerman) => {
      this.isGerman = isGerman;
      this.translations = isGerman
        ? CONTACTTRANSLATIONS.de
        : CONTACTTRANSLATIONS.en;
    });
    this.isGerman = this.lang.isGerman();
    this.translations = this.lang.isGerman()
      ? CONTACTTRANSLATIONS.de
      : CONTACTTRANSLATIONS.en;
  }

  ngOnDestroy(): void {
    if (this.langSub) {
      this.langSub.unsubscribe();
    }
  }

  url: string = 'https://daniel-lehmann.dev/sendMail.php';

  async onSubmit(form: NgForm) {
    if (form.valid) {
      try {
        const response = await firstValueFrom(
          this.http.post<any>(this.url, this.contact)
        );
        if (response.status === 'success') {
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

  toggleCheck() {
    this.isChecked = !this.isChecked;
  }
}
