import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { usersService } from './services/users.service';
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
import { HardSkillsComponent } from './components/skills/hard-skills/hard-skills.component';
import { SoftSkillsComponent } from './components/skills/soft-skills/soft-skills.component';
import { EducationAddModalComponent } from './modals/education/education-add-modal.component';


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
    HardSkillsComponent,
    SoftSkillsComponent,
    EducationAddModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [usersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
