import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Experience } from 'src/app/model/experience';
import { ExperienceService } from 'src/app/services/experience.service';

@Component({
  selector: 'app-experience-add',
  templateUrl: './experience-add.component.html',
  styleUrls: ['./experience-add.component.css']
})
export class ExperienceAddComponent implements OnInit{
  formValue !: FormGroup;
  experienceModel: Experience = new Experience();

  constructor(private fb: FormBuilder,
    private expServ: ExperienceService){} 

  ngOnInit(): void {
    this.formValue = this.fb.group({
      job:[''],
      company:[''],
      startDate:[''],
      endDate:[''],
      description:['']
    })
  }

  postExperience(){
    this.experienceModel.id = this.formValue.value.id;
    this.experienceModel.job = this.formValue.value.job;
    this.experienceModel.company = this.formValue.value.company;
    this.experienceModel.startDate = this.formValue.value.startDate;
    this.experienceModel.endDate = this.formValue.value.endDate;
    this.experienceModel.description = this.formValue.value.description;

    this.expServ.postData(this.experienceModel)
    .subscribe( res=>{
      console.log(res);
      alert("Estudio añadido correctamente.")
      },err=>{
        alert("Error.");
      });
  }
}
