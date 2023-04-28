import { Component, OnInit } from '@angular/core';
import { usersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.css']
})
export class ExperiencesComponent implements OnInit { 

  dataPortfolio:any;
  experiences:any=[];

  /*
  job:string='';
  company:string='';
  startDate:string='';
  endDate:string='';
  description:string='';
  */

  constructor(private portfolioService: usersService){}


  /*asi se llama un array completo*/

  ngOnInit(): void {
    this.portfolioService.getData().subscribe(data =>{
      console.log(data);
      this.experiences=data.experiences;
      /* asi datos puntuales? como about me
      this.title=data.educations;
      this.institution=data.educations;
      this.startDate=data.educations;
      this.endDate=data.educations;
      this.url=this.educations;
      */
    })
  }

  /*
  experiences:any;
  constructor(private experiencesData: usersService){}

  ngOnInit(): void {
    this.experiencesData.getData().subscribe(data =>{
      this.experiences = data.experiences;
    })
  }
  */
  
}