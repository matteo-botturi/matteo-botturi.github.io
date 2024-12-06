import { Component, ElementRef, HostListener, OnDestroy, OnInit, ViewChild} from '@angular/core';
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
export class SkillsComponent implements OnInit, OnDestroy {
  @ViewChild('nextSection') nextSection!: ElementRef;
  categories: Category[] = SKILLS_DATA;
  selectedCategory: Category | null = null;
  dropdownOpen = false;
  showFab: boolean = true; // Controlla la visibilità del FAB
  
  ngOnInit(): void {
    // Aggiungi il listener per lo scroll
    console.log("Component Initialized!");
    //window.addEventListener('scroll', this.checkScrollPosition.bind(this), { passive: true });
  }

  ngOnDestroy(): void {
    // Rimuovi l'evento di scroll quando il componente viene distrutto
    console.log("Component Destroyed!");
    //window.removeEventListener('scroll', this.checkScrollPosition.bind(this));
  }

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

  @HostListener('window:scroll', [])
  onScroll(): void {
    const scrollPosition = window.scrollY + window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    // Log per verificare i valori di scroll
    console.log(`Scroll Position: ${scrollPosition}, Document Height: ${documentHeight}`);

    // Aggiungo la classe se il fondo della pagina è raggiunto
    if (scrollPosition >= documentHeight - 100) {
      document.body.classList.add('at-bottom');
    } else {
      document.body.classList.remove('at-bottom');
    }
  }

  // Funzione per lo scroll manuale
  scrollToNextSection(): void {
    const currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
    const targetScroll = currentScroll + window.innerHeight / 2;  // Scende di metà altezza schermo

    const step = (targetScroll - currentScroll) / 20;  // Divide il movimento in 20 step
    let currentStep = 0;

    const scrollInterval = setInterval(() => {
      currentStep++;
      document.documentElement.scrollTop += step;
      document.body.scrollTop += step;

      if (currentStep >= 20) {
        clearInterval(scrollInterval);
      }
    }, 16); // 16ms per 60fps
  }
}