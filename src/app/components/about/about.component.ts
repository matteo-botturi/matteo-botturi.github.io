import { Component } from '@angular/core';
import { TranslateService, TranslatePipe, TranslateDirective } from "@ngx-translate/core";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent {

  constructor(private translate: TranslateService) {
    this.translate.addLangs(['fr', 'it']);
    this.translate.setDefaultLang('it');
    this.translate.use('it');
  }
}