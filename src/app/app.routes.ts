import { Routes } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';
import { PrivacyComponent } from './shared/privacy/privacy.component';
import { LegalComponent } from './shared/legal/legal.component';

export const routes: Routes = [
  { path: '', component: MainContentComponent },
  { path: 'privacy', component: PrivacyComponent },
  { path: 'legal', component: LegalComponent}
];
