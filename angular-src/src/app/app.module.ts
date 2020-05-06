import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import {ProfileComponent} from './profile/profile.component';
import {LoginComponent} from './login/login.component';
import { OneComponent } from './one/one.component';

import {FormsModule} from '@angular/forms';

import {ValidateService } from './service/validate.service';
import {AuthService} from './service/auth.service';
import {FlashMessagesModule} from 'angular2-flash-messages';
import {NgxPaginationModule} from 'ngx-pagination';
import{GroupServiceService} from './service/group-service.service';

import { HttpClientModule , HttpHeaders} from '@angular/common/http';
import { LoginWithGoogleComponent } from './login-with-google/login-with-google.component';
import { AuthGuard } from './guard/auth.guard';
import { HomepageComponent } from './homepage/homepage.component';

import { ReadytomoveinComponent } from './readytomovein/readytomovein.component';
import { Sqft2000Component } from './sqft2000/sqft2000.component';
import { FooterComponent } from './footer/footer.component';
import { GroupsComponent } from './groups/groups.component';
import { ProjectsComponent } from './projects/projects.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { GroupDetailComponent } from './group-detail/group-detail.component';
import { NewsComponent } from './news/news.component';

@NgModule({   
  declarations: [
    AppComponent,
    NavComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    LoginComponent,
    LoginWithGoogleComponent,
    HomepageComponent,
    OneComponent,
    ReadytomoveinComponent,
    Sqft2000Component,
    FooterComponent,
    GroupsComponent,
    ProjectsComponent,
    AboutusComponent,
    GroupDetailComponent,
    NewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,FlashMessagesModule,HttpClientModule,NgxPaginationModule 
  ],
  providers: [ValidateService,AuthService,AuthGuard,GroupServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
