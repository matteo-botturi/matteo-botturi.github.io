import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { SKILLS_DATA } from './skills.data';
import { Category } from '../../category';
import { Skill } from '../../skill';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [NgFor, NgIf, CommonModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {

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