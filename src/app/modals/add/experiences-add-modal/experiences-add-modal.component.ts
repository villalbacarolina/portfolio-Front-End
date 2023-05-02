import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { usersService } from 'src/app/services/users.service';
// import { ExperiencesModelComponent } from './experiences-modal-model.component';

@Component({
  selector: 'app-experiences-add-modal',
  templateUrl: './experiences-add-modal.component.html',
  styleUrls: ['./experiences-add-modal.component.css']
})
export class ExperiencesAddModalComponent { /*implements OnInit{
  formValue !: FormGroup;
  experienceModel: ExperiencesModelComponent = new ExperiencesModelComponent();
  experiencesData !:any;

  constructor(private fb: FormBuilder,
    private uS: usersService){} 

  ngOnInit(): void {
    this.formValue = this.fb.group({
      jobExp:[''],
      companyExp:[''],
      startDateExp:[''],
      endDateExp:[''],
      descriptionExp:['']
    })
  }

  postExperience(){
    this.experienceModel.idExp = this.formValue.value.idExp;
    this.experienceModel.jobExp = this.formValue.value.jobExp;
    this.experienceModel.companyExp = this.formValue.value.companyExp;
    this.experienceModel.startDateExp = this.formValue.value.startDateExp;
    this.experienceModel.endDateExp = this.formValue.value.endDateExp;
    this.experienceModel.descriptionExp = this.formValue.value.descriptionExp;

    this.uS.postData(this.experienceModel)
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


  editExperience(experience: any){
    this.formValue.controls['jobExp'].setValue(experience.jobExp);
    this.formValue.controls['companyExp'].setValue(experience.companyExp);
    this.formValue.controls['startDateExp'].setValue(experience.endDateExp);
    this.formValue.controls['descriptionExp'].setValue(experience.descriptionExp);
    // https://www.youtube.com/watch?v=I9mtyLg32nQ
  }
*/
}
