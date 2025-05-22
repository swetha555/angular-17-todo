import { Component } from '@angular/core';
import { RouterLinkActive, RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { NavComponent } from './nav/nav.component';
import { MATERIAL_IMPORTS } from './shared/material.imports';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HomeComponent, TodoListComponent, NavComponent, ...MATERIAL_IMPORTS, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'todo';
}
