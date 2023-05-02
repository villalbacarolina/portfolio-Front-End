import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { usersService } from 'src/app/services/users.service';
import { EducationModelComponent } from './education-add-modal-model.component';

@Component({
  selector: 'app-education-add-modal',
  templateUrl: './education-add-modal.component.html',
  styleUrls: ['./education-add-modal.component.css']
})
export class EducationAddModalComponent implements OnInit{
  formValue !: FormGroup;
  educationModel: EducationModelComponent = new EducationModelComponent();
  educationsData !:any;

  constructor(private fb: FormBuilder,
    private uS: usersService){} 

  ngOnInit(): void {
    this.formValue = this.fb.group({
      titleEd:[''],
      institution:[''],
      startDate:[''],
      endDate:[''],
      url:['']
    })
  }

  postEducation(){
    this.educationModel.id = this.formValue.value.id;
    this.educationModel.titleEd = this.formValue.value.titleEd;
    this.educationModel.institution = this.formValue.value.institution;
    this.educationModel.startDate = this.formValue.value.startDate;
    this.educationModel.endDate = this.formValue.value.endDate;
    this.educationModel.url = this.formValue.value.url;

    this.uS.postData(this.educationModel)
    .subscribe(
      {
      next: resp => {
        console.log(resp);
        alert("Añadido exitosamente.");
        let ref= document.getElementById('cancel');
        ref?.click();
        this.formValue.reset();
      },
      error: err => {
        console.log(err.error.msg);
        alert("Error.");
      }
      });
  }


  editEducation(education: any){
    this.formValue.controls['titleEd'].setValue(education.titleEd);
    this.formValue.controls['institution'].setValue(education.institution);
    this.formValue.controls['startDate'].setValue(education.startDate);
    this.formValue.controls['endDate'].setValue(education.endDate);
    this.formValue.controls['url'].setValue(education.url);
    // https://www.youtube.com/watch?v=I9mtyLg32nQ
  }
  
}


