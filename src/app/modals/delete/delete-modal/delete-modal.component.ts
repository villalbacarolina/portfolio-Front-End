import { Component } from '@angular/core';
import { usersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.css']
})
export class DeleteModalComponent {

  constructor(private uS: usersService){} 

  deleteEducation(education: any){
    this.uS.deleteData(education.id);
  }

}
