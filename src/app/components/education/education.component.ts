import { Component, OnInit } from '@angular/core';
import { EducationAddModalComponent } from 'src/app/modals/add/education-add-modal/education-add-modal.component';
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

  /*
  logIn(): boolean {
    this.logged = true;
    return this.logged;
  }

  logOut(): boolean {
    this.logged = false;
    return this.logged;
  }*/

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

  /*
  openEditEducation(education: any){
    this.dialog.open(EducationAddModalComponent, {
      width:'45%',
      data:education,
    }).afterClosed().subscribe(val=>{
    if(val='guardar'){
      this.getEducations();
    }
    });
  }


  <button  mat-icon-button color="primary" (click)="openEditEducacion(educacion)" type="button"  data-toggle="modal" data-target="#myModal"><mat-icon>create</mat-icon></button>
  
     openEditEducacion(educacion: any){​​
    this.dialog.open(EducacionFormComponent, {​​
      width:'45%',
      data:educacion,
  }​​).afterClosed().subscribe(val=>{​​
    if(val='guardar'){​​
      this.listarEducacion();
    }​​
  }​​);
}​​
  public listarEducacion(): void {​​
    this.serviceEducacion.getAllEducacion()
    .subscribe(
      data=>this.educaciones=data
    )}​​
*/
  

}


