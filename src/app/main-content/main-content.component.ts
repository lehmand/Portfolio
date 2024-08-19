import { Component } from '@angular/core';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { AboutMeSectionComponent } from './about-me-section/about-me-section.component';
import { SkillsSectionComponent } from './skills-section/skills-section.component';
import { ProjectsSectionComponent } from './projects-section/projects-section.component';
import { ContactSectionComponent } from './contact-section/contact-section.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { ReferenceSectionComponent } from './reference-section/reference-section.component';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [
    HeroSectionComponent,
    AboutMeSectionComponent,
    SkillsSectionComponent,
    ProjectsSectionComponent,
    ContactSectionComponent,
    FooterComponent,
    MenuComponent,
    ReferenceSectionComponent
  ],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss',
})
export class MainContentComponent {}
