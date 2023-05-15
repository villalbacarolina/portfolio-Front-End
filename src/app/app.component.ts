import { Component } from '@angular/core';
import { LoginService } from './services/login.service';
import { EducationService } from './services/education.service';
import { ProjectService } from './services/project.service';
import { AboutMeService } from './services/about-me.service';
import { SoftSkillService } from './services/soft-skill.service';
import { HardSkillService } from './services/hard-skill.service';
import { ExperienceService } from './services/experience.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [LoginService, EducationService, ExperienceService, ProjectService, AboutMeService, 
    SoftSkillService, HardSkillService]
})
export class AppComponent {
  title = 'carolina-angeles-porfolio';
}
