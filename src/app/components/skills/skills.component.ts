import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { SKILLS_DATA } from './skills.data';
import { Category } from '../../category';
import { Skill } from '../../skill';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [NgFor, NgIf, CommonModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit{

  constructor(private titleService: Title, private metaService: Meta){}

  ngOnInit(): void {
    this.titleService.setTitle('Compétences - Matteo Botturi');

    this.metaService.updateTag({
      name: 'description',
      content: 'Explorez les compétences techniques de Matteo Botturi, de la programmation Front-End à la gestion des bases de données, en passant par le développement Full Stack et les technologies modernes.'
    });

    this.metaService.updateTag({
      name: 'keywords',
      content: 'compétences, full stack, développement, front-end, back-end, technologies'
    });
  }

  categories: Category[] = SKILLS_DATA;
  selectedCategory: Category | null = null;
  dropdownOpen = false;

  toggleDropdown(event: Event): void {
    event.preventDefault();
    this.dropdownOpen = !this.dropdownOpen;
  }

  selectCategory(category: any, event: Event): void {
    event.preventDefault();
    this.selectedCategory = category;
    this.dropdownOpen = false;
  }

  showAllSkills(event: Event): void {
    event.preventDefault();
    this.selectedCategory = null;
    this.dropdownOpen = false;
  }

  getSkills(): Skill[] {
    return this.selectedCategory
      ? this.selectedCategory.skills
      : this.categories.flatMap((category) => category.skills);
  }

  @HostListener('document:click', ['$event'])
  closeDropdown(event: Event): void {
    const target = event.target as HTMLElement;
    if (!target.closest('.dropdown-container')) {
      this.dropdownOpen = false;
    }
  }
}