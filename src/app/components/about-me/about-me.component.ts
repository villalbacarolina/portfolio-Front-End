import { Component, OnInit } from '@angular/core';
import { EducationService } from 'src/app/services/education.service';
import { usersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent{
  aboutMe:any=[];
  
}
