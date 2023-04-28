import { Component, OnInit } from '@angular/core';
import { usersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit { 

  header:any;

  constructor(private portfolioService: usersService){}


  ngOnInit(): void {
    this.portfolioService.getData().subscribe(data =>{
      console.log(data);
      this.header=data.header;
    })
  }

}
