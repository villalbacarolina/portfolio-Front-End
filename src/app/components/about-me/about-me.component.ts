import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AboutMe } from 'src/app/model/about-me';
import { AboutMeService } from 'src/app/services/about-me.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent{
  
  @Output() output: EventEmitter<any> = new EventEmitter();
  formValue !: FormGroup;
  aboutMeModel: AboutMe = new AboutMe();
  aboutMe:any=[];
  

  constructor(private abServ: AboutMeService, private fb: FormBuilder, private loginServ:LoginService){
    this.formValue = this.fb.group({description:['']})
      this.getAboutMe();
      this.abServ.output.subscribe(data =>{
        console.log('Recibiendo: ',data);
      })
  }

  getAboutMe(){
    this.abServ.getData().subscribe(res =>{
      this.aboutMe= res;
    });
  }

  onEdit(ab: any){
    this.aboutMeModel.id = ab.id;
    this.formValue.controls['description'].setValue(ab.description);
  }

  updateAboutMe(){
    this.aboutMeModel.description = this.formValue.value.description;

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
