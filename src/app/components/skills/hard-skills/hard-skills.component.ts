import { Component, OnInit } from '@angular/core';
import { usersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-hard-skills',
  templateUrl: './hard-skills.component.html',
  styleUrls: ['./hard-skills.component.css']
})
export class HardSkillsComponent implements OnInit { 

  hardSkills:any=[];


  constructor(private portfolioService: usersService){}

  ngOnInit(): void {
    this.portfolioService.getData().subscribe(data =>{
      console.log(data);
      this.hardSkills=data.hardSkills;
    })
  }

}
