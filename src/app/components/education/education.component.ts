import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Education } from 'src/app/model/education';
import { EducationService } from 'src/app/services/education.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit { 

  @Output() output: EventEmitter<any> = new EventEmitter();
  formValue !: FormGroup;
  educationModel: Education = new Education();
  educations:any=[];
  logged:boolean=true;

  constructor(private edServ: EducationService, private fb: FormBuilder){}

  ngOnInit(): void {
    this.formValue = this.fb.group({
    title:[''],
    institution:[''],
    startDate:[''],
    endDate:[''],
    url:['']
      })
    this.getEducations();
    this.edServ.output.subscribe(data =>{
      console.log('Recibiendo: ',data);
    })
  }

  getEducations(){
    this.edServ.getData().subscribe(res =>{
      this.educations= res;
    });
  }

  deleteEducation(education: any){
    this.edServ.deleteData(education.id)
    .subscribe(res =>{
      alert("Eliminado.");
      this.getEducations();
    });
  }
  

  onEdit(education: any){
    this.educationModel.id = education.id;
    this.formValue.controls['title'].setValue(education.title);
    this.formValue.controls['institution'].setValue(education.institution);
    this.formValue.controls['startDate'].setValue(education.startDate);
    this.formValue.controls['endDate'].setValue(education.endDate);
    this.formValue.controls['url'].setValue(education.url);
  }

  updateEducation(){
    this.educationModel.title = this.formValue.value.title;
    this.educationModel.institution = this.formValue.value.institution;
    this.educationModel.url = this.formValue.value.url;
    this.educationModel.startDate = this.formValue.value.startDate;
    this.educationModel.endDate = this.formValue.value.endDate;

    this.edServ.putData(this.educationModel)
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


