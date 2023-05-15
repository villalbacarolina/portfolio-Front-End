import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AboutMe } from 'src/app/model/about-me';
import { AboutMeService } from 'src/app/services/about-me.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent{
  
  @Output() output: EventEmitter<any> = new EventEmitter();
  formValue !: FormGroup;
  aboutMeModel: AboutMe = new AboutMe();
  header:any=[];

  constructor(private abServ: AboutMeService, private fb: FormBuilder, private loginServ:LoginService){
    this.formValue = this.fb.group({
      profilePicture:[''],
      fullName:[''],
      img:[''],
      professionalProfile:['']})
      this.getAboutMe();
      this.abServ.output.subscribe(data =>{
        console.log('Recibiendo: ',data);
      })
  }

  getAboutMe(){
    this.abServ.getData().subscribe(res =>{
      this.header= res;
    });
  }
  

  onEdit(ab: any){
    this.aboutMeModel.id = ab.id;
    this.formValue.controls['fullName'].setValue(ab.fullName);
    this.formValue.controls['professionalProfile'].setValue(ab.professionalProfile);
    this.formValue.controls['profilePicture'].setValue(ab.profilePicture);
    this.formValue.controls['img'].setValue(ab.img);
  }

  updateAboutMe(){
    this.aboutMeModel.professionalProfile = this.formValue.value.professionalProfile;
    this.aboutMeModel.profilePicture = this.formValue.value.profilePicture;
    this.aboutMeModel.fullName = this.formValue.value.fullName;
    this.aboutMeModel.img = this.formValue.value.img;

    this.abServ.putData(this.aboutMeModel)
    .subscribe(res => {
      alert("Editado correctamente.")
      let ref= document.getElementById('cancel');
      ref?.click();
      this.formValue.reset();
      this.getAboutMe;
    })
  }


}
