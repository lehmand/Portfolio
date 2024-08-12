import { Routes } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';
import { ImprintComponent } from './shared/imprint/imprint.component';
import { AboutMeSectionComponent } from './main-content/about-me-section/about-me-section.component';

export const routes: Routes = [
    { path: '', component: MainContentComponent },
    { path: 'imprint', component: ImprintComponent},
];
