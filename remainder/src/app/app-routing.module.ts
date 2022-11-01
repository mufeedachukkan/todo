import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeletedEventsComponent } from './deleted-events/deleted-events.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'signup',component:RegisterComponent},
  {path:'home',component:HomeComponent},
  {path:'deleted',component:DeletedEventsComponent},
  {path:'logout',component:LogoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
