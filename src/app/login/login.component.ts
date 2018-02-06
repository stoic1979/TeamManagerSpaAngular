import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from './../auth/auth.service';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { TeamService } from '../team/team.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;                    
  private formSubmitAttempt: boolean; 
  private loggedIn = new BehaviorSubject<boolean>(false);


  constructor(
    private fb: FormBuilder,         
    private authService: AuthService,
    private router: Router,
    private teamService: TeamService
  ) {}

  ngOnInit() {
    this.form = this.fb.group({     
      email:    ['', Validators.required],
      password: ['', Validators.required]
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
      this.authService.login(this.form.value).subscribe((res)=> {
        console.log('[Login Componets] Response =>' +JSON.stringify(res));
        console.log('[Login Componets] Token =>' +JSON.stringify(res.token));
        this.teamService.saveToken(res.token);
        this.formSubmitAttempt = true;


      },(err) => {
            const errBody = err.json();
            console.log('login error: ', errBody);
        });
    }
  }

    get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

}