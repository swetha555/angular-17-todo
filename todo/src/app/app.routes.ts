import { Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { TodoListComponent } from './todo-list/todo-list.component';

export const routes: Routes = [
    { path: '', redirectTo: '/todo-list', pathMatch: 'full'},
    { path: 'profile', component: ProfileComponent },
    // { path: 'todo-list', component: TodoListComponent },
    { path: 'not-found', component: NotFoundComponent },
    { path: 'login', component: LoginComponent }


];
