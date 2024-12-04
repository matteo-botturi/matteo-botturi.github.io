import { Component, Renderer2 } from '@angular/core';
import { LanguageColorPipe } from '../../language-color.pipe';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { PROJECTS } from './project.data';


declare const M: any;

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [LanguageColorPipe, NgFor, NgIf, CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent {
  projects = PROJECTS;
  visibleProjects: number = 4;

  loadMoreProjects() {
    this.visibleProjects += 4;
  }
}