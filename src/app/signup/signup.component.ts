import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from './../auth/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
 
  roles = [
          { value:     'MANAGER',
            viewValue: 'MANAGER'},
            
          { value:     'WORKER',
            viewValue: 'WORKER'},

          { value:     'ADMIN',
            viewValue: 'ADMIN'}  
  ];

  form: FormGroup;
  private formSubmitAttempt: boolean;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService
  ) {}



  ngOnInit() {
    this.form = this.fb.group({
      first_name: ['', Validators.required],
      last_name:  ['', Validators.required],
      email:      ['', Validators.required],
      role:       ['', Validators.required],
      password:   ['', Validators.required],
      team_name:  ['', Validators.required]
    });
  }

  isFieldInvalid(field: string) {
    return (
      (!this.form.get(field).valid && this.form.get(field).touched) ||
      (this.form.get(field).untouched && this.formSubmitAttempt)
    );
  }

  onSubmit() {
    if (this.form.valid) {
        this.authService.signup(this.form.value);
        console.log('[Signup] :: Register Successfuly')
    }
        this.formSubmitAttempt = true;
  }

}
