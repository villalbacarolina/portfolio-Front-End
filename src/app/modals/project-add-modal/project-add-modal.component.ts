import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Project } from 'src/app/model/project';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-project-add-modal',
  templateUrl: './project-add-modal.component.html',
  styleUrls: ['./project-add-modal.component.css']
})
export class ProjectAddModalComponent implements OnInit{
  formValue !: FormGroup;
  projectModel: Project = new Project();

  constructor(private fb: FormBuilder,
    private pServ: ProjectService){} 

  ngOnInit(): void {
    this.formValue = this.fb.group({
      title:[''],
      img:[''],
      description:[''],
      url:['']
    })
  }

  postProject(){
    this.projectModel.id = this.formValue.value.id;
    this.projectModel.title = this.formValue.value.title;
    this.projectModel.img = this.formValue.value.img;
    this.projectModel.description = this.formValue.value.description;
    this.projectModel.url = this.formValue.value.url;

    this.pServ.postData(this.projectModel)
    .subscribe( res=>{
      console.log(res);
      alert("Estudio añadido correctamente.")
      },err=>{
        alert("Error.");
      });
  }
}
