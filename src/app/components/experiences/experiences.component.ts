import { Component, OnInit } from '@angular/core';
import { usersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.css']
})
export class ExperiencesComponent { 
  experiences:any=[];

  /* implements OnInit { 

  dataPortfolio:any;
  experiences:any=[];
  logged:boolean=false;

  constructor(private portfolioService: usersService){}

  ngOnInit(): void {
    this.getExperiences();
    this.portfolioService.output.subscribe(data =>{
      console.log('Recibiendo: ',data);
      // this.educationDataEdited.push(data);
    })
  }

  logIn(): boolean {
    this.logged = true;
    return this.logged;
  }

  logOut(): boolean {
    this.logged = false;
    return this.logged;
  }

  getExperiences(){
    this.portfolioService.getData()
    .subscribe(res =>{
      this.experiences= res;
    });
  }

  deleteExperience(experience: any){
    this.portfolioService.deleteData(experience.id)
    .subscribe(res =>{
      alert("Eliminado.");
      this.getExperiences();
    });
  }
  */
}