import { Component, OnInit } from '@angular/core';
import { Education } from 'src/app/model/education';
import { EducationService } from 'src/app/services/education.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit{
  educations: Education[]=[];

  constructor(private sEducation: EducationService){}

  ngOnInit(): void {
    this.getEducations()
  }

  getEducations():void{
    this.sEducation.allEducations().subscribe(data => {this.educations=data});
  }





  /*implements OnInit { 

  dataPortfolio:any;
  educations:any=[];
  logged:boolean=false;

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
*/
}


