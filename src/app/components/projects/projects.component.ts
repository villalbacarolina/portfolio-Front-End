import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Project } from 'src/app/model/project';
import { User } from 'src/app/model/user';
import { LoginService } from 'src/app/services/login.service';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit{ 

  @Output() output: EventEmitter<any> = new EventEmitter();
  formValue !: FormGroup;
  projectModel: Project = new Project();
  projects:any=[];

  constructor(private pServ: ProjectService, private fb: FormBuilder, private loginServ:LoginService){
    this.formValue = this.fb.group({
      title:[''],
      img:[''],
      description:[''],
      url:['']
        })
      this.getProjects();
      this.pServ.output.subscribe(data =>{
        console.log('Recibiendo: ',data);
      })
  }

  ngOnInit(): void {
    
  }
  
  /* */

  getProjects(){
    this.pServ.getData().subscribe(res =>{
      this.projects= res;
    });
  }

  deleteProject(project: any){
    this.pServ.deleteData(project.id)
    .subscribe(res =>{
      alert("Eliminado.");
      this.getProjects();
    });
  }
  

  onEdit(project: any){
    this.projectModel.id = project.id;
    this.formValue.controls['title'].setValue(project.title);
    this.formValue.controls['img'].setValue(project.img);
    this.formValue.controls['description'].setValue(project.description);
    this.formValue.controls['url'].setValue(project.url);
  }

  updateProject(){
    this.projectModel.title = this.formValue.value.title;
    this.projectModel.img = this.formValue.value.img;
    this.projectModel.url = this.formValue.value.url;
    this.projectModel.description = this.formValue.value.description;

    this.pServ.putData(this.projectModel)
    .subscribe(res => {
      alert("Editado correctamente.")
      let ref= document.getElementById('cancel');
      ref?.click();
      this.formValue.reset();
      this.getProjects;
    })
  }
  
}
