import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms'

import { HomeComponent } from './home/home.component';
import { PostsComponent } from './posts/posts.component';
import { UsersComponent } from './users/users.component';
import { AddUserComponent } from './add-user/add-user.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ],
  declarations: [
    HomeComponent,
    PostsComponent,
    UsersComponent,
    AddUserComponent
  ]
})
export class SharedModule { }
