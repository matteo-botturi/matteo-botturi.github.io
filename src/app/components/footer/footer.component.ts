import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { TranslatePipe } from "@ngx-translate/core";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterModule, TranslatePipe],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  constructor(private router: Router) {}

  goToPage(route: string): void {
    this.router.navigate([route]);
  }
}