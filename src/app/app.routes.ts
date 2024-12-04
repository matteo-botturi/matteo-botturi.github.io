import { Routes } from '@angular/router';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AboutComponent } from './components/about/about.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent }, 
    { path: 'about', component: AboutComponent }, 
    { path: 'skills', component: SkillsComponent },
    { path: 'projects', component: ProjectsComponent }, 
    { path: '**', component: NotFoundComponent },
];
