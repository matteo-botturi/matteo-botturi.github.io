import { AfterViewInit, Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements AfterViewInit{
  private sidenavInstance!: MaterializeSidenav | null;
  
  constructor(private router: Router) {}

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