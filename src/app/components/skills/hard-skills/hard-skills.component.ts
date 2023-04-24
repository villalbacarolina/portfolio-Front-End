import { Component, OnInit } from '@angular/core';
import { usersService } from 'src/app/service/users.service';

@Component({
  selector: 'app-hard-skills',
  templateUrl: './hard-skills.component.html',
  styleUrls: ['./hard-skills.component.css']
})
export class HardSkillsComponent implements OnInit {
  hardSkills:any;
  constructor(private hardData: usersService){}

  ngOnInit(): void {
    this.hardData.getData().subscribe(data =>{
      this.hardSkills = data.hardSkills;
    })
  }

}
