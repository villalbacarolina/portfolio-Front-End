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
import { DeleteModalComponent } from './modals/delete/delete-modal/delete-modal.component';
import { ExperiencesEditModalComponent } from './modals/edit/experiences-edit-modal/experiences-edit-modal.component';
import { ExperiencesAddModalComponent } from './modals/add/experiences-add-modal/experiences-add-modal.component';
import { EducationAddModalComponent } from './modals/add/education-add-modal/education-add-modal.component';
import { HardSkillsAddModalComponent } from './modals/add/hard-skills-add-modal/hard-skills-add-modal.component';
import { SoftSkillsAddModalComponent } from './modals/add/soft-skills-add-modal/soft-skills-add-modal.component';
import { ProjectsAddModalComponent } from './modals/add/projects-add-modal/projects-add-modal.component';
import { AboutMeEditModalComponent } from './modals/edit/about-me-edit-modal/about-me-edit-modal.component';
import { HardSkillEditModalComponent } from './modals/edit/hard-skill-edit-modal/hard-skill-edit-modal.component';
import { EducationEditModalComponent } from './modals/edit/education-edit-modal/education-edit-modal.component';
import { SoftSkillEditModalComponent } from './modals/edit/soft-skill-edit-modal/soft-skill-edit-modal.component';
import { SocialMediaAddModalComponent } from './modals/add/social-media-add-modal/social-media-add-modal.component';
import { ProjectsEditModalComponent } from './modals/edit/projects-edit-modal/projects-edit-modal.component';
import { HeaderEditModalComponent } from './modals/edit/header-edit-modal/header-edit-modal.component';
import { SocialMediaDeleteModalComponent } from './modals/delete/social-media-delete-modal/social-media-delete-modal.component';


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
    AboutMeEditModalComponent,
    DeleteModalComponent,
    ExperiencesEditModalComponent,
    ExperiencesAddModalComponent,
    EducationAddModalComponent,
    HardSkillsAddModalComponent,
    SoftSkillsAddModalComponent,
    ProjectsAddModalComponent,
    HardSkillEditModalComponent,
    EducationEditModalComponent,
    SoftSkillEditModalComponent,
    SocialMediaAddModalComponent,
    ProjectsEditModalComponent,
    HeaderEditModalComponent,
    SocialMediaDeleteModalComponent
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
