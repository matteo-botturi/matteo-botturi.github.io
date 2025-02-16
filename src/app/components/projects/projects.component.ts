import { Component } from '@angular/core';
import { LanguageColorPipe } from '../../language-color.pipe';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { PROJECTS } from './project.data';
import { TranslatePipe } from "@ngx-translate/core";

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [LanguageColorPipe, NgFor, NgIf, CommonModule, TranslatePipe],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent {

  projects = PROJECTS;
  visibleProjects: number = 6;

  loadMoreProjects() {
    this.visibleProjects += 2;
  }
}