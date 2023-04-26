import { Component, OnInit } from '@angular/core';
import { usersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit { 

  dataPortfolio:any;
  title:string='';
  institution:string='';
  startDate:string='';
  endDate:string='';
  url:string='';


  constructor(private portfolioService: usersService){}


  ngOnInit(): void {
    this.portfolioService.getData().subscribe(data =>{
      console.log(data);
      this.title=data.title;
      this.institution=data.institution;
      this.startDate=data.startDate;
      this.endDate=data.endDate;
      this.url=this.url;
    })
  }



  /*
  id:number = 0;
  title:string = '';
  institution:string = '';
  startDate:string = '';
  endDate:string = '';
  url:string = '';
*/
}


