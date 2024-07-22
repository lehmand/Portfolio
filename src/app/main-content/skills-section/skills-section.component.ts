import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Skill {
  name: string;
  iconUrl: string;
}

@Component({
  selector: 'app-skills-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills-section.component.html',
  styleUrl: './skills-section.component.scss'
})
export class SkillsSectionComponent {


  constructor(){

  }

  skills: Skill[] = [
    { name: 'Angular', iconUrl: '/assets/icons/skills/angular.png' },
    { name: 'TypeScript', iconUrl: '/assets/icons/skills/typescript.png' },
    { name: 'JavaScript', iconUrl: '/assets/icons/skills/javascript.png' },
    { name: 'HTML', iconUrl: '/assets/icons/skills/html.png' },
    { name: 'CSS', iconUrl: '/assets/icons/skills/css.png' },
    { name: 'Firebase', iconUrl: '/assets/icons/skills/firebase.png' },
    { name: 'Git', iconUrl: '/assets/icons/skills/git.png' },
    { name: 'Scrum', iconUrl: '/assets/icons/skills/scrum.png' },
    { name: 'Rest-Api', iconUrl: '/assets/icons/skills/api.png' },
    { name: 'Material Design', iconUrl: '/assets/icons/skills/material.png' },
  ]
}
