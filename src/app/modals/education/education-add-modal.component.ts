import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Education } from 'src/app/model/education';
import { EducationService } from 'src/app/services/education.service';

@Component({
  selector: 'app-education-add-modal',
  templateUrl: './education-add-modal.component.html',
  styleUrls: ['./education-add-modal.component.css']
})
export class EducationAddModalComponent implements OnInit{
  formValue !: FormGroup;
  educationModel: Education = new Education();

  constructor(private fb: FormBuilder,
    private edServ: EducationService){} 

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

    this.edServ.postData(this.educationModel)
    .subscribe( res=>{
      console.log(res);
      alert("Estudio añadido correctamente.")
      },err=>{
        alert("Error.");
      });
  }
  
  
}


