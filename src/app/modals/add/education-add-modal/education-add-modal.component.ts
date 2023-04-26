import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EducationComponent } from 'src/app/components/education/education.component';
import { usersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-education-add-modal',
  templateUrl: './education-add-modal.component.html',
  styleUrls: ['./education-add-modal.component.css']
})
export class EducationAddModalComponent { /*implements OnInit{
  formValue !: FormGroup;
  education: EducationComponent = new EducationComponent();
  educations !:any;

  constructor(private fb: FormBuilder,
    private uS: usersService){} 

  ngOnInit(): void {
    this.formValue = this.fb.group({
      title:[''],
      institution:[''],
      startDate:[''],
      endDate:[''],
      url:['']
    })
    this.getEducations();
  }

  postEducation(){
    this.education.title = this.formValue.value.title;
    this.education.institution = this.formValue.value.institution;
    this.education.startDate = this.formValue.value.startDate;
    this.education.endDate = this.formValue.value.endDate;
    this.education.url = this.formValue.value.url;

    this.uS.postData(this.education)
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

  getEducations(){
    this.uS.getData()
    .subscribe(res =>{
      this.educations = res;
      });
  }
*/
}
