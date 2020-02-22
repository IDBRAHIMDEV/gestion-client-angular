import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListClientComponent } from './components/list-client/list-client.component';
import { AddClientComponent } from './components/add-client/add-client.component';
import { EditClientComponent } from './components/edit-client/edit-client.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { LoginComponent } from './components/auth/login/login.component';
import { PageNotFoundComponent } from './partials/page-not-found/page-not-found.component';


const routes: Routes = [
  { path:"", redirectTo: '/clients', pathMatch: 'full' },
  { path:"clients", component: ListClientComponent },
  { path:"clients/create", component: AddClientComponent },
  { path:"clients/:id/edit", component: EditClientComponent },
  { path:"register", component: RegisterComponent },
  { path:"login", component: LoginComponent },
  { path:"**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
