import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { Top10Component } from './top10/top10.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AuthGuard } from './Services/auth.guard';
import { AdminComponent } from './admin/admin.component';
import { UpdateComponent } from './update/update.component';
import { adminGuard } from './Services/admin.guard';
import { UsersComponent } from './users/users.component';
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home' , component: HomeComponent },
  { path: 'profile',canActivate: [AuthGuard], component: ProfileComponent },
  { path: 'top10', component: Top10Component },

  { path: 'login', component: LoginComponent },

  { path: 'register', component: RegisterComponent },
  { path: 'users', canActivate:[adminGuard],component: UsersComponent},
{ path: 'admin', canActivate:[adminGuard],component: AdminComponent},
{ path: 'update/:id', component: UpdateComponent},
  { path: '**' , component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
