import { Component, OnInit } from '@angular/core';
import { usersService } from 'src/app/service/users.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent{ /*implements OnInit {
  studies:any;
  constructor(private studiesData: usersService){}

  ngOnInit(): void {
    this.studiesData.getData().subscribe(data =>{
      this.studies = data.studies;
    })
  }*/

  id:number = 0;
  title:string = '';
  institution:string = '';
  startDate:string = '';
  endDate:string = '';
  url:string = '';

}


