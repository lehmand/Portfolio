import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Project {
  image: string;
  projectNumber: string;
  name: string;
  tools: string;
  description: string;
  link: string;
  live: string
}

@Component({
  selector: 'app-projects-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects-section.component.html',
  styleUrl: './projects-section.component.scss'
})
export class ProjectsSectionComponent {

  projects: Project[] = [
    {
      image: '/assets/img/projects/join.png',
      projectNumber: '01/04',
      name: 'Join',
      tools: 'Angular | TypeScript | HTML | CSS | Firebase',
      description: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and    categories.',
      link: 'https://github.com/lehmand/join',
      live: 'join.daniel-lehmann.dev'
    },

    {
      image: '/assets/img/projects/pollo-loco.png',
      projectNumber: '02/04',
      name: 'Pollo Loco',
      tools: 'JavaScript | HTML | CSS',
      description: 'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.',
      link: 'https://github.com/lehmand/el-pollo-loco',
      live: 'loco.daniel-lehmann.dev'
    }
  ];


  getProjectClass(index: number){
    return index % 2 === 0 ? 'even-project' : 'odd-project'
  }

}
