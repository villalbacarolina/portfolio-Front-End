import { Component, OnInit } from '@angular/core';
import { usersService } from 'src/app/service/users.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects:any;
  constructor(private projectsData: usersService){}

  ngOnInit(): void {
    this.projectsData.getData().subscribe(data =>{
      this.projects = data.projects;
    })
  }

}
