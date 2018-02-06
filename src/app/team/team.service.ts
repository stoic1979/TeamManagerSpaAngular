import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Response } from '@angular/http';
import { Http, Headers } from '@angular/http';
import { User } from '../auth/user';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { environment } from '../../environments/environment';


@Injectable()
export class TeamService {

  constructor(private http: Http) { }


     getAllTeamMembers (): Observable<User[]> {
        const header = this.createAuthorizationHeader();

        return this.http.get(`${environment.API_ENDPOINT}/members/all`, { headers: header }).map((res) => {
            const result = res.json();
            const users = [];
            for (const list of result.data) {
                 const  user = new User(list);
                users.push(user);
            }
            return users;
        });
    }

    saveToken (token: string) {
        localStorage.setItem('userToken', token);
    }

    getUserToken () {
        return localStorage.getItem('userToken') || '';
    }
    

    createAuthorizationHeader () {
        const headers = new Headers();
        const token = this.getUserToken();
        console.log('[TeamServices] createAuthorizationHeader() Team ServicesToken ' + JSON.stringify(token));
        headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=utf-8');
        headers.append('x-access-token', token);
        return headers;
    }


}//TeamService
