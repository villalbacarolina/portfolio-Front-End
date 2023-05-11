import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  socialMedia:any=[];
  loginOn:boolean=true;
  userData?: User;
  
 
  constructor(private loginServ:LoginService){}
  /*
  ngOnDestroy(): void {
    this.loginServ.currentUserData.unsubscribe();
    this.loginServ.currentUserLoginOn.unsubscribe();
  }
  */

  ngOnInit(): void {
    this.loginServ.currentUserLoginOn.subscribe({
      next: (loginOn)=>{
        this.loginOn=loginOn;
      }
    });
    this.loginServ.currentUserData.subscribe({
      next: (userData)=>{
        this.userData=userData;
      }
    });
  }

}
