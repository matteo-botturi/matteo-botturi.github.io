import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslatePipe } from "@ngx-translate/core";

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent {

  constructor(private router: Router) {}

  goToPage(route: string): void {
    this.router.navigate([route]);
  }
}