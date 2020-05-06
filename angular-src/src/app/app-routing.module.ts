import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import {ProfileComponent} from './profile/profile.component';
import {LoginComponent} from './login/login.component';
import { LoginWithGoogleComponent } from './login-with-google/login-with-google.component';
import { AuthGuard } from './guard/auth.guard';
import { HomepageComponent } from './homepage/homepage.component';
import { ReadytomoveinComponent } from './readytomovein/readytomovein.component';
import { OneComponent } from './one/one.component';
import { Sqft2000Component } from './sqft2000/sqft2000.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { GroupDetailComponent } from './group-detail/group-detail.component';
import { NewsComponent } from './news/news.component';
const routes: Routes = [
  {path:'',component:HomepageComponent},
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'profile',component:ProfileComponent,canActivate:[AuthGuard]},
  {path:'goolge',component:LoginWithGoogleComponent},
  {path:'home',component:HomeComponent  },
  {path:'homepage',component:HomepageComponent  },
  {path:'ReadyToMoveInProperties',component:ReadytomoveinComponent},
  {path:'one',component:OneComponent},
  {path:'sqft2000plus',component:Sqft2000Component},
  {path:'aboutus',component:AboutusComponent},
  {path:'groupdetail/:company',component:GroupDetailComponent},
  {path:'news',component:NewsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
