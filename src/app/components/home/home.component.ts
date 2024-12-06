import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit{
  typingTexts = [
    "Full Stack Developer",
    "Open to Alternance",
    "Java | Spring | Angular",
  ];
  currentText = "";
  currentIndex = 0;
  cursorIndex = 0;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.typeNextText();
  }

  typeNextText(): void {
    if (this.currentIndex < this.typingTexts.length) {
      const fullText = this.typingTexts[this.currentIndex];
      if (this.cursorIndex < fullText.length) {
        this.currentText += fullText[this.cursorIndex++];
        setTimeout(() => this.typeNextText(), 100);
      } else {
        setTimeout(() => {
          this.currentText = "";
          this.cursorIndex = 0;
          this.currentIndex++;
          if (this.currentIndex >= this.typingTexts.length) {
            this.currentIndex = 0;
          }
          this.typeNextText();
        }, 2000);
      }
    }
  }

  goToPage(route: string): void {
    this.router.navigate([route]);
  }
}