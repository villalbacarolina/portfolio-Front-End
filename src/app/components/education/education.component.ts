import { Component, OnInit } from '@angular/core';
import { usersService } from 'src/app/services/users.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Education } from 'src/app/model/education';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit { 
  formValue !: FormGroup;
  educationModel: Education = new Education();
  educations:any=[];
  logged:boolean=true;

  constructor(private portfolioService: usersService, private fb: FormBuilder){}

  ngOnInit(): void {
    this.formValue = this.fb.group({
    titleEd:[''],
    institution:[''],
    startDate:[''],
    endDate:[''],
    url:['']
      })
    this.getEducations();
    this.portfolioService.output.subscribe(data =>{
      console.log('Recibiendo: ',data);
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

  onEdit(education: any){
    this.educationModel.id = education.id;
    this.formValue.controls['titleEd'].setValue(education.titleEd);
    this.formValue.controls['institution'].setValue(education.institution);
    this.formValue.controls['startDate'].setValue(education.startDate);
    this.formValue.controls['endDate'].setValue(education.endDate);
    this.formValue.controls['url'].setValue(education.url);
  }

  updateEducation(){
    this.educationModel.titleEd = this.formValue.value.titleEd;
    this.educationModel.institution = this.formValue.value.institution;
    this.educationModel.url = this.formValue.value.url;
    this.educationModel.startDate = this.formValue.value.startDate;
    this.educationModel.endDate = this.formValue.value.endDate;

    this.portfolioService.putData(this.educationModel, this.educationModel.id)
    .subscribe(res => {
      alert("Editado correctamente.")
      let ref= document.getElementById('cancel');
      ref?.click();
      this.formValue.reset();
      this.getEducations;
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

}


