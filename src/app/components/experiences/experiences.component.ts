import { Component, OnInit } from '@angular/core';
import { usersService } from 'src/app/service/users.service';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.css']
})
export class ExperiencesComponent implements OnInit{
  //falta hacer esto en los demas componentes
  //ya puedo recorrer y usar el json
  experience:any;
  constructor(private expData: usersService){}
  
  ngOnInit(): void{
    this.expData.getData().subscribe(data =>{
      this.experience=data.experience;
    }); 
  //post,etc.
  }

}