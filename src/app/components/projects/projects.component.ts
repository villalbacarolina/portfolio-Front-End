import { Component, OnInit } from '@angular/core';
import { usersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects:any=[];
}
