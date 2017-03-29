import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './shared/home/home.component';
import { PostsComponent } from './shared/posts/posts.component';
import { UsersComponent } from './shared/users/users.component';

export const router: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'users', component: UsersComponent },
    { path: 'posts', component: PostsComponent },
    { path: '**', redirectTo: 'home'}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);