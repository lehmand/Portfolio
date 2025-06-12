import { CommonModule } from '@angular/common';
import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { LanguageService } from '../../services/language-service/language.service';
import { Subscription } from 'rxjs';
import { PROJECTTRANSLATIONS } from '../../shared/translations';
import { ImageService } from '../../services/image-service/image.service';

interface Project {
  image: string;
  projectNumber: string;
  name: string;
  tools: string;
  description: string;
  link: string;
  live: string;
}

type Language = 'en' | 'de';

@Component({
  selector: 'app-projects-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects-section.component.html',
  styleUrl: './projects-section.component.scss',
})
export class ProjectsSectionComponent implements OnInit, OnDestroy {
  constructor(private lang: LanguageService) {}
  private langSub: Subscription | undefined;
  public imgService = inject(ImageService)

  currentLanguage: Language = 'en';
  translations = PROJECTTRANSLATIONS[this.currentLanguage];

  projects: Project[] = [
    {
      image: '/assets/img/projects/join.png',
      projectNumber: '01/02',
      name: 'Join',
      tools: 'JavaScript | HTML | CSS',
      description:
        'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      link: 'https://github.com/lehmand/join',
      live: 'https://join.daniel-lehmann.dev',
    },

    {
      image: '/assets/img/projects/pollo-loco.png',
      projectNumber: '02/03',
      name: 'Pollo Loco',
      tools: 'JavaScript | HTML | CSS',
      description:
        'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.',
      link: 'https://github.com/lehmand/el-pollo-loco',
      live: 'https://loco.daniel-lehmann.dev',
    },
    {
      image: '/assets/img/projects/videoflix.png',
      projectNumber: '03/03',
      name: 'Videoflix',
      tools: 'Angular | SCSS | Python | Django | Django-Restframework',
      description:
        'Videoflix is a streaming platform that allows users to watch videos.',
      link: 'https://github.com/lehmand/videoflix_backend',
      live: 'https://videoflix.daniel-lehmann.dev',
    },
  ];

  getProjectClass(index: number) {
    return index % 2 === 0 ? 'even-project' : 'odd-project';
  }

  ngOnInit(): void {
    this.langSub = this.lang.german$.subscribe((isGerman) => {
      this.translations = isGerman
        ? PROJECTTRANSLATIONS.de
        : PROJECTTRANSLATIONS.en;
    });
    this.translations = this.lang.isGerman()
      ? PROJECTTRANSLATIONS.de
      : PROJECTTRANSLATIONS.en;
  }

  ngOnDestroy(): void {
    if (this.langSub) {
      this.langSub.unsubscribe();
    }
  }

  getDescription(index: number): string {
    return this.translations.projects[index].description;
  }

  switchLanguage(language: Language) {
    this.currentLanguage = language;
    this.translations = PROJECTTRANSLATIONS[this.currentLanguage];
  }
}
