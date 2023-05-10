import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, Validators, AbstractControl, FormGroup} from '@angular/forms'
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login-input',
  templateUrl: './login-input.component.html',
  styleUrls: ['./login-input.component.css']
})
export class LoginInputComponent {

    //campos reactivos
    form: FormGroup = new FormGroup({
      email: new FormControl(''),
      password: new FormControl('')
    });
    submitted = false;
  
    constructor(private formBuilder: FormBuilder, private userServ: UserService) {

      this.form = this.formBuilder.group(
        {
          email: ['', [Validators.required, Validators.email]],
          password: [
            '',
            [
              Validators.required,
              Validators.minLength(6),
              Validators.maxLength(40)
            ]
          ]
        }
      );
    }
  
    ngOnInit(): void {
    }
  
    //traer datos
  
    get f(): { [key: string]: AbstractControl } {
      return this.form.controls;
    }
  
    //subir datos
  
    onSubmit(): void {
      this.submitted = true;
  
      if (this.form.valid) {
        this.userServ.login(this.form.value).subscribe(data => {
          console.log(data);
        });
      }
  //oink
      //ver datos en el inspeccionador. se puede borrar
      //console.log(JSON.stringify(this.form.value, null, 2));
    }
  
    //reiniciar formulario
  
    onReset(): void {
      this.submitted = false;
      this.form.reset();
    }

}
