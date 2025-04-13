import { Routes } from '@angular/router';

export const routes: Routes = [

    {
        path: '',
        pathMatch: 'full',
        loadComponent: () => import('./components/header/header.component').then(m => m.HeaderComponent)
    },
    {
        path: 'projects',
        loadComponent: () => import('./components/projects/projects.component').then(m => m.ProjectsComponent)
    },
    {
        path: 'about',  
        loadComponent: () => import('./components/about/about.component').then(m => m.AboutComponent)

    },
    {
        path:'articles',
        loadComponent: () => import('./components/articles/articles.component').then(m => m.ArticlesComponent)
    }
   
];
