import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Experience } from 'src/app/model/experience';
import { User } from 'src/app/model/user';
import { ExperienceService } from 'src/app/services/experience.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.css']
})
 export class ExperiencesComponent implements OnInit, OnDestroy { 

  @Output() output: EventEmitter<any> = new EventEmitter();
  formValue !: FormGroup;
  experienceModel: Experience = new Experience();
  experiences:any=[];
  /* INTENTO 2 DE LOGIN */
  loginOn:boolean=true;
  userData?: User;
  

  constructor(private expServ: ExperienceService, private fb: FormBuilder, private loginServ:LoginService){
    this.formValue = this.fb.group({
      job:[''],
      company:[''],
      startDate:[''],
      endDate:[''],
      description:['']
        })
      this.getExperiences();
      this.expServ.output.subscribe(data =>{
        console.log('Recibiendo: ',data);
      })
  }

  /* INTENTO 2 DE LOGIN */
  
  ngOnDestroy(): void {
    this.loginServ.currentUserData.unsubscribe();
    this.loginServ.currentUserLoginOn.unsubscribe();
  }

  ngOnInit(): void {
    this.loginServ.currentUserLoginOn.subscribe({
      next: (loginOn)=>{
        this.loginOn=loginOn;
      }
    });
    this.loginServ.currentUserData.subscribe({
      next: (userData)=>{
        this.userData=userData;
      }
    });
  }
  

  getExperiences(){
    this.expServ.getData().subscribe(res =>{
      this.experiences= res;
    });
  }

  deleteExperience(experience: any){
    this.expServ.deleteData(experience.id)
    .subscribe(res =>{
      alert("Eliminado.");
      this.getExperiences();
    });
  }
  

  onEdit(experience: any){
    this.experienceModel.id = experience.id;
    this.formValue.controls['title'].setValue(experience.title);
    this.formValue.controls['institution'].setValue(experience.institution);
    this.formValue.controls['startDate'].setValue(experience.startDate);
    this.formValue.controls['endDate'].setValue(experience.endDate);
    this.formValue.controls['url'].setValue(experience.url);
  }

  updateExperience(){
    this.experienceModel.job = this.formValue.value.job;
    this.experienceModel.company = this.formValue.value.company;
    this.experienceModel.description = this.formValue.value.description;
    this.experienceModel.startDate = this.formValue.value.startDate;
    this.experienceModel.endDate = this.formValue.value.endDate;

    this.expServ.putData(this.experienceModel)
    .subscribe(res => {
      alert("Editado correctamente.")
      let ref= document.getElementById('cancel');
      ref?.click();
      this.formValue.reset();
      this.getExperiences;
    })
  }
  

}