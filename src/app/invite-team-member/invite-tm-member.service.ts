import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { User } from '../auth/user';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { environment } from '../../environments/environment';

const API_URL = environment.apiUrl;

@Injectable()
export class InviteTmMemberService {


  constructor(
  	private http: HttpClient,
    private router: Router){ }

  inviteMember(user: User){
  	 const body = new HttpParams().set('email', user.email);
     this.http.post(API_URL + "/users/login",body.toString(),{
     headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')}).subscribe((res) => {
       console.log("Response : Succesfuly" +  JSON.stringify(res));
       this.router.navigate(['/']);
     },(err) => {
       const errBody = err.json();
       console.log("Response : ErrorBody" +  JSON.stringify(errBody));
       console.log("Response : ErrorBody" +  JSON.stringify(err));
     });
  }

}
