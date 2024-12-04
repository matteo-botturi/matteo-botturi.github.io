import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements AfterViewInit, OnDestroy{
  private carouselInstance!: MaterializeCarousel;
  private intervalId!: any;

  constructor(private router: Router) {}
  
  ngAfterViewInit(): void {
    if (typeof document !== 'undefined') {
      const carouselElems = document.querySelectorAll('.carousel');
      this.carouselInstance = (window as any).M.Carousel.init(carouselElems, {
        indicators: true,
        duration: 300,
      })[0];

      this.startAutoScroll();
    }
  }

  ngOnDestroy(): void {
    if (this.carouselInstance) {
      this.carouselInstance.destroy();
    }
    clearInterval(this.intervalId);
  }

  startAutoScroll(): void {
    this.intervalId = setInterval(() => {
      if (this.carouselInstance) {
        this.carouselInstance.next();
      }
    }, 3000);
  }

  goToPage(route: string): void {
    this.router.navigate([route]);
  }
}