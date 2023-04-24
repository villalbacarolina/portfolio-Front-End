import { Component, OnInit } from '@angular/core';
import { usersService } from 'src/app/service/users.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {
  aboutMe:any;
  constructor(private aboutMeData: usersService){}

  ngOnInit(): void {
    this.aboutMeData.getData().subscribe(data =>{
      this.aboutMe = data.aboutMe;
    })
  }
}
