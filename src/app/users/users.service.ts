import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Http, Headers } from '@angular/http';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { environment } from '../../environments/environment';
import { Users } from '../users/users';

@Injectable()
export class UsersService {
  constructor(
  	private http: Http
  	) { }
 
  getUsers(): Observable<Users[]> {
  	     // const header = this.createAuthorizationHeader();

        return this.http.get(`${environment.API_ENDPOINT}`).map((res: Response) => {
            const result = res.json();
            const users = [];
            for (const list of result.data) {
                const user = new Users(list);
                users.push(user);
            }
            return users;
        });
  }

  getUser(){

  }

  getUserByName(){

  }

   getUserToken () {
        return localStorage.getItem('userToken') || '';
  }


  createAuthorizationHeader
     () {
        const headers = new Headers();
        const token = this.getUserToken();
        headers.append('Content-Type', 'application/json; charset=utf-8');
        headers.append('Authorization', token);
        return headers;
    }


}
