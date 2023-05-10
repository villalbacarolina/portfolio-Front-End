import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, Validators, AbstractControl, FormGroup} from '@angular/forms'
import { Router } from '@angular/router';
import { loginRequest } from 'src/app/model/loginRequest';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login-input',
  templateUrl: './login-input.component.html',
  styleUrls: ['./login-input.component.css']
})
export class LoginInputComponent {

    //campos reactivos
  loginForm: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });
  loginError:string="";

  
  constructor(private formBuilder: FormBuilder, private loginServ: LoginService,
              private router: Router) {

    this.loginForm = this.formBuilder.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['',[Validators.required, Validators.minLength(6), Validators.maxLength(40)]]
      });

  }

  login() {
    if(this.loginForm.valid){
      console.log("Llamar al servicio login");
      this.loginServ.login(this.loginForm.value as loginRequest).subscribe({
        next: (userData) =>{
          console.log(userData);
        }, 
        error: (errorData) =>{
          console.error(errorData);
          this.loginError=errorData;
        },
        complete: () =>{
          console.info("Login completo");
          this.router.navigateByUrl('/');
          this.loginForm.reset;
        }
      })
    }
    else
      alert("Error al ingresar los datos");
      this.loginForm.markAllAsTouched;
  }

  get email() {
    return this.loginForm.controls['email'];
  }
  get password() {
    return this.loginForm.controls['password'];
  }
  
  
     /*
    //traer datos
    get f(): { [key: string]: AbstractControl } {
      return this.loginForm.controls;
    }
 
    //subir datos
    onSubmit(): void {
      this.submitted = true;
      if (this.loginForm.invalid) {
        return;
      }
      if (this.loginForm.valid) {
        this.userServ.login(this.loginForm.value).subscribe(data => {
          console.log(data);
        });
      }
    }

    //resetear formulario
    onReset(): void {
      this.submitted = false;
      this.loginForm.reset();
    }
*/
}
