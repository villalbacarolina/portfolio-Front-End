import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EducationComponent } from 'src/app/components/education/education.component';
import { usersService } from 'src/app/service/users.service';

@Component({
  selector: 'app-education-add-modal',
  templateUrl: './education-add-modal.component.html',
  styleUrls: ['./education-add-modal.component.css']
})
export class EducationAddModalComponent implements OnInit{
  formValue !: FormGroup;
  education: EducationComponent = new EducationComponent();
  constructor(private fb: FormBuilder,
    private user: usersService){} 

  ngOnInit(): void {
    this.formValue = this.fb.group({
      title:[''],
      institution:[''],
      startDate:[''],
      endDate:[''],
      url:['']
    })
  }

  postEducation(){
    this.education.title = this.formValue.value.title;
    this.education.institution = this.formValue.value.institution;
    this.education.startDate = this.formValue.value.startDate;
    this.education.endDate = this.formValue.value.endDate;
    this.education.url = this.formValue.value.url;

    this.user.postData(this.education)
    .subscribe(res=>{
      console.log(res);
      alert("¡Educación añadida con éxito!.")
    },
    err=>{
      alert("¡Error!.")
    })
  }


}
