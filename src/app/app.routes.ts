import { Routes } from '@angular/router';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AboutComponent } from './components/about/about.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    {
        path: 'home',
        component: HomeComponent,
        data: {
          title: 'Accueil - Mon Portfolio',
          description: 'Bienvenue sur le portfolio de Matteo Botturi, un développeur Full Stack passionné par le développement web, l\'innovation et la création d\'interfaces intuitives.',
          keywords: 'développeur, portfolio, compétences, projets, full stack, web'
        }
      },
      {
        path: 'about',
        component: AboutComponent,
        data: {
          title: 'À propos de moi',
          description: 'Découvrez le parcours professionnel et les compétences de Matteo Botturi, développeur Full Stack avec une expertise en technologies web et une passion pour l\'innovation.',
          keywords: 'développeur, full stack, parcours, compétences, technologies web'
        }
      },
      {
        path: 'skills',
        component: SkillsComponent,
        data: {
          title: 'Compétences - Mon Portfolio',
          description: 'Explorez les compétences techniques de Matteo Botturi, de la programmation Front-End à la gestion des bases de données, en passant par le développement Full Stack et les technologies modernes.',
          keywords: 'compétences, full stack, développement, front-end, back-end, technologies'
        }
      },
      {
        path: 'projects',
        component: ProjectsComponent,
        data: {
          title: 'Projets - Mon Portfolio',
          description: 'Découvrez les projets réalisés par Matteo Botturi, de la conception de sites web aux applications dynamiques, en passant par des solutions innovantes adaptées aux besoins des clients.',
          keywords: 'projets, développement web, applications, solutions innovantes, création de sites'
        }
      }, 
    { path: '**', component: NotFoundComponent },
];
