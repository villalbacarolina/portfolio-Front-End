import { Component, OnInit } from '@angular/core';
import { usersService } from 'src/app/services/users.service';
@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.css']
})
export class ExperiencesComponent implements OnInit {
  experiences:any;
  constructor(private experiencesData: usersService){}

  ngOnInit(): void {
    this.experiencesData.getData().subscribe(data =>{
      this.experiences = data.experiences;
    })
  }
  

}