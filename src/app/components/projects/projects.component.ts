import { Component, OnInit } from '@angular/core';
import { LanguageColorPipe } from '../../language-color.pipe';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { PROJECTS } from './project.data';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [LanguageColorPipe, NgFor, NgIf, CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit{

  constructor(private titleService: Title, private metaService: Meta){}

  ngOnInit(): void {
    this.titleService.setTitle('Projets - Matteo Botturi');

    this.metaService.updateTag({
      name: 'description',
      content: 'Découvrez les projets réalisés par Matteo Botturi, de la conception de sites web aux applications dynamiques, en passant par des solutions innovantes adaptées aux besoins des clients.'
    });

    this.metaService.updateTag({
      name: 'keywords',
      content: 'projets, développement web, applications, solutions innovantes, création de sites'
    });
  }

  projects = PROJECTS;
  visibleProjects: number = 6;

  loadMoreProjects() {
    this.visibleProjects += 2;
  }
}