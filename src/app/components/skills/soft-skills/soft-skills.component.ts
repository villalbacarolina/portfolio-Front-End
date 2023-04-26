import { Component, OnInit } from '@angular/core';
import { usersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-soft-skills',
  templateUrl: './soft-skills.component.html',
  styleUrls: ['./soft-skills.component.css']
})
export class SoftSkillsComponent implements OnInit {
  softSkills:any;
  constructor(private softData: usersService){}

  ngOnInit(): void {
    this.softData.getData().subscribe(data =>{
      this.softSkills = data.softSkills;
    })
  }

}
