import { AfterViewInit, Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { TranslateService, TranslatePipe } from "@ngx-translate/core";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, TranslatePipe],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements AfterViewInit{
  private sidenavInstance!: MaterializeSidenav | null;
  
  constructor(private router: Router, private translate: TranslateService) {
    const savedLang = localStorage.getItem('language') || 'it';
    this.translate.use(savedLang);
  }

  changeLanguage(lang: string) {
    localStorage.setItem('language', lang);
    this.translate.use(lang);
  }

  ngAfterViewInit(): void {
    if (typeof document !== 'undefined') {
      const sidenavElem = document.querySelectorAll('.sidenav');
      if(sidenavElem){
        this.sidenavInstance = (window as any).M.Sidenav.init(sidenavElem, {
          edge: 'left',
          draggable: true,
        })[0];
      }
    }
  }

  closeSidenav(): void {
    if (this.sidenavInstance) {
      this.sidenavInstance.close();
    }
  }
  
  goToPage(route: string): void {
    this.router.navigate([route]);
  }
}