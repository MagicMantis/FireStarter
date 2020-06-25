import { LoginComponent } from './pages/login/login.component';
import { SimulationComponent } from './pages/simulation/simulation.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompareComponent } from './pages/compare/compare.component';
import { RegisterComponent } from './pages/register/register.component';
import { UserComponent } from './pages/user/user.component';
import { VerifyEmailComponent } from './pages/verify-email/verify-email.component';


const routes: Routes = [
  { path: "", component: SimulationComponent },
  { path: "compare", component: CompareComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'user', component: UserComponent},
  { path: 'verify-email-address', component: VerifyEmailComponent },
  { path: "**", component: SimulationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
