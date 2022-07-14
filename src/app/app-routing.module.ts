import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserFormComponent } from './pages/users/user-form/user-form.component';
import { UsersListComponent } from './pages/users/users-list/users-list.component';
import { DataBidingComponent } from './pages/data-biding/data-biding.component';
import { TodoListComponent } from './pages/todo/todo-list/todo-list.component';

const routes: Routes = [
  { path: '', component: UsersListComponent},
  { path: 'form', component: UserFormComponent},
  { path: 'form/:id', component: UserFormComponent},
  { path: 'todo', component: TodoListComponent},
  { path: 'data-binding', component: DataBidingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
