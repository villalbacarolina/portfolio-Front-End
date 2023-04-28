import { Component, OnInit } from '@angular/core';
import { usersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit { 
  socialMedia:any=[];

  constructor(private portfolioService: usersService){}


  ngOnInit(): void {
    this.portfolioService.getData().subscribe(data =>{
      console.log(data);
      this.socialMedia=data.socialMedia;
    })
  }

}
