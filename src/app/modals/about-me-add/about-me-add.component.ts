import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AboutMe } from 'src/app/model/about-me';
import { AboutMeService } from 'src/app/services/about-me.service';

@Component({
  selector: 'app-about-me-add',
  templateUrl: './about-me-add.component.html',
  styleUrls: ['./about-me-add.component.css']
})
export class AboutMeAddComponent implements OnInit{
  formValue !: FormGroup;
  aboutMeModel: AboutMe = new AboutMe();

  constructor(private fb: FormBuilder,
    private abServ: AboutMeService){} 

  ngOnInit(): void {
    this.formValue = this.fb.group({
      fullName:[''],
      profilePicture:[''],
      professionalProfile:[''],
      description:['']
    })
  }

  postAboutMe(){
    this.aboutMeModel.id = this.formValue.value.id;
    this.aboutMeModel.fullName = this.formValue.value.fullName;
    this.aboutMeModel.profilePicture = this.formValue.value.profilePicture;
    this.aboutMeModel.description = this.formValue.value.description;
    this.aboutMeModel.professionalProfile = this.formValue.value.professionalProfile;

    this.abServ.postData(this.aboutMeModel)
    .subscribe( res=>{
      console.log(res);
      alert("Estudio añadido correctamente.")
      },err=>{
        alert("Error.");
      });
  }
}
