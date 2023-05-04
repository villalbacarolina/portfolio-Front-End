import { Component, OnInit } from '@angular/core';
import { usersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-hard-skills',
  templateUrl: './hard-skills.component.html',
  styleUrls: ['./hard-skills.component.css']
})
export class HardSkillsComponent {
  hardSkills:any=[];
}