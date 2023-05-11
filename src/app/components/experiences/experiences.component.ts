import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Experience } from 'src/app/model/experience';
import { ExperienceService } from 'src/app/services/experience.service';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.css']
})
 export class ExperiencesComponent {} 
// implements OnInit { 

//   @Output() output: EventEmitter<any> = new EventEmitter();
//   formValue !: FormGroup;
//   experienceModel: Experience= new Experience();
//   experiences:any=[];
//   logged:boolean=true;

//   constructor(private expServ: ExperienceService, private fb: FormBuilder){}

//   ngOnInit(): void {
//     this.formValue = this.fb.group({
//     job:[''],
//     company:[''],
//     startDate:[''],
//     endDate:[''],
//     url:['']
//       })
//     this.getExperiences();
//     this.expServ.output.subscribe(data =>{
//       console.log('Recibiendo: ',data);
//     })
//   }

//   getExperiences(){
//     this.expServ.getData().subscribe(res =>{
//       this.experiences= res;
//     });
//   }

//   deleteExperience(experience: any){
//     this.expServ.deleteData(experience.id)
//     .subscribe(res =>{
//       alert("Eliminado.");
//       this.getExperiences();
//     });
//   }
  

//   onEdit(experience: any){
//     this.experienceModel.id = experience.id;
//     this.formValue.controls['title'].setValue(experience.title);
//     this.formValue.controls['institution'].setValue(experience.institution);
//     this.formValue.controls['startDate'].setValue(experience.startDate);
//     this.formValue.controls['endDate'].setValue(experience.endDate);
//     this.formValue.controls['url'].setValue(experience.url);
//   }

//   /*
//   updateEducation(){
//     this.experienceModel.job = this.formValue.value.job;
//     this.experienceModel.company = this.formValue.value.company;
//     this.experienceModel.description = this.formValue.value.description;
//     this.experienceModel.startDate = this.formValue.value.startDate;
//     this.experienceModel.endDate = this.formValue.value.endDate;

//     this.expServ.putData(this.experienceModel)
//     .subscribe(res => {
//       alert("Editado correctamente.")
//       let ref= document.getElementById('cancel');
//       ref?.click();
//       this.formValue.reset();
//       this.getExperiences;
//     })
//   }
//   */
// }