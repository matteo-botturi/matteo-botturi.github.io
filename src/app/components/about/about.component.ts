import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit{

  constructor(private titleService: Title, private metaService: Meta){}

  ngOnInit(): void {

    this.titleService.setTitle('À propos - Matteo Botturi');

    this.metaService.updateTag({
      name: 'description',
      content: 'Découvrez le parcours professionnel et les compétences de Matteo Botturi, développeur Full Stack avec une expertise en technologies web et une passion pour l\'innovation.'
    });

    this.metaService.updateTag({
      name: 'keywords',
      content: 'développeur, full stack, parcours, compétences, technologies web'
    });
  }
}