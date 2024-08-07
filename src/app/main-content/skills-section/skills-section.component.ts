import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { trigger, state, animate, style, keyframes, transition } from '@angular/animations';

interface Skill {
  name: string;
  iconUrl: string;
  status: string
}

@Component({
  selector: 'app-skills-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills-section.component.html',
  styleUrl: './skills-section.component.scss',
  animations: [
    trigger('iconAnimation', [
      state('initial', style({transform: 'translateX(0)', opacity: 1})),
      state('animated', style({transform: 'translateX(0)', opacity: 1})),

      transition('initial => animated', [
        animate('75ms ease-in-out', style({transform: 'translateX(65%)', opacity: 0})),
        animate('75ms ease-in-out', style({transform: 'translateX(-65%)', opacity: 1})),
        animate('75ms ease-in-out', style({transform: 'translateX(0%)', opacity: 1})),
      ])
    ])
  ]
})
export class SkillsSectionComponent {

  status: 'initial' | 'animated' = 'initial'

  constructor(){

  }

  skills: Skill[] = [
    { name: 'Angular', iconUrl: '/assets/icons/skills/angular.png', status: 'initial' },
    { name: 'TypeScript', iconUrl: '/assets/icons/skills/typescript.png', status: 'initial' },
    { name: 'JavaScript', iconUrl: '/assets/icons/skills/javascript.png', status: 'initial' },
    { name: 'HTML', iconUrl: '/assets/icons/skills/html.png', status: 'initial' },
    { name: 'CSS', iconUrl: '/assets/icons/skills/css.png', status: 'initial' },
    { name: 'Firebase', iconUrl: '/assets/icons/skills/firebase.png', status: 'initial' },
    { name: 'Git', iconUrl: '/assets/icons/skills/git.png', status: 'initial' },
    { name: 'Scrum', iconUrl: '/assets/icons/skills/scrum.png', status: 'initial' },
    { name: 'Rest-Api', iconUrl: '/assets/icons/skills/api.png', status: 'initial' },
    { name: 'Material Design', iconUrl: '/assets/icons/skills/material.png', status: 'initial' },
  ];

  animate(index: number){
    this.skills[index].status = 'animated'
  }

  animationDone(index: number){
    this.skills[index].status = 'initial'
  }
}
