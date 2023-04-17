import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { EducationComponent } from './components/education/education.component';
import { ExperiencesComponent } from './components/experiences/experiences.component';
import { SkillsComponent } from './components/skills/skills.component';
import { LoginComponent } from './components/login/login.component';
import { LoginInputComponent } from './components/login/login-input/login-input.component';
import { RegisterInputComponent } from './components/login/register-input/register-input.component';
import { LoginButtonComponent } from './components/navbar/login-button/login-button.component';
import { ReactiveFormsModule } from '@angular/forms';
import { IndexComponent } from './components/index/index.component';
import { AboutMeModalComponent } from './modals/about-me-modal/about-me-modal.component';
import { ExperienceModalComponent } from './modals/experience-modal/experience-modal.component';
import { EducationModalComponent } from './modals/education-modal/education-modal.component';
import { ProjectsModalComponent } from './modals/projects-modal/projects-modal.component';
import { HeaderModalComponent } from './modals/header-modal/header-modal.component';
import { NavbarSocialMediaModalComponent } from './modals/navbar-social-media-modal/navbar-social-media-modal.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutMeComponent,
    NavbarComponent,
    ProjectsComponent,
    EducationComponent,
    ExperiencesComponent,
    SkillsComponent,
    LoginComponent,
    LoginInputComponent,
    RegisterInputComponent,
    LoginButtonComponent,
    IndexComponent,
    AboutMeModalComponent,
    ExperienceModalComponent,
    EducationModalComponent,
    ProjectsModalComponent,
    HeaderModalComponent,
    NavbarSocialMediaModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
