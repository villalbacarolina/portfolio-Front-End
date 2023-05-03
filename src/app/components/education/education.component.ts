import { Component, OnInit } from '@angular/core';
import { usersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit { 

  dataPortfolio:any;
  educations:any=[];
  logged:boolean=true;

  constructor(private portfolioService: usersService){}

  ngOnInit(): void {
    this.getEducations();
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

  getEducations(){
    this.portfolioService.getData()
    .subscribe(res =>{
      this.educations= res;
    });
  }

  deleteEducation(education: any){
    this.portfolioService.deleteData(education.id)
    .subscribe(res =>{
      alert("Eliminado.");
      this.getEducations();
    });
  }

}


