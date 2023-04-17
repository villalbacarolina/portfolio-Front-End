import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, Validators, AbstractControl, FormGroup} from '@angular/forms'

@Component({
  selector: 'app-register-input',
  templateUrl: './register-input.component.html',
  styleUrls: ['./register-input.component.css']
})
export class RegisterInputComponent {

  //campos reactivos
  form: FormGroup = new FormGroup({
    fullname: new FormControl(''),
    username: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
    acceptTerms: new FormControl(false),
  });
  submitted = false;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        fullname: ['', Validators.required],
        username: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(20)
          ]
        ],
        email: ['', [Validators.required, Validators.email]],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(40)
          ]
        ],
        confirmPassword: ['', Validators.required],
        acceptTerms: [false, Validators.requiredTrue]
      }
    );
  }

  //traer datos

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  //subir datos

  onSubmit(): void {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

    //ver datos en el inspeccionador. se puede borrar
    console.log(JSON.stringify(this.form.value, null, 2));
  }

  //reiniciar formulario

  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }
}
