import { Component, OnInit } from '@angular/core';
import { usersService } from 'src/app/services/users.service';
import { EducationAddModalComponent } from 'src/app/modals/add/education-add-modal/education-add-modal.component';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit { 

  dataPortfolio:any;
  educations:any=[];

  constructor(private portfolioService: usersService){}

  ngOnInit(): void {
    this.getEducations();
    this.portfolioService.output.subscribe(data =>{
      console.log('Recibiendo: ',data);
      // this.educationDataEdited.push(data);
    })
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


