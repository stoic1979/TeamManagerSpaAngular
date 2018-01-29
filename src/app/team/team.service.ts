import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { environment } from '../../environments/environment';


const API_URL = environment.apiUrl;


@Injectable()
export class TeamService {

  constructor(private http: HttpClient) { }


    getAllTeamMembers () {
        const header = this.createAuthHeader();

        return this.http.get('https://teammanager9.herokuapp.com/members/all',
          {
      		headers: new HttpHeaders()
        	.set('x-access-token', this.getUserToken())
    	  })
        
    }


    getUserToken () {
        return localStorage.getItem('userToken') || '';
    }

    createAuthHeader() {
        let headers = new HttpHeaders();
        const token = this.getUserToken();
        console.log("using token: " + token);
        headers.set('x-access-token', token);
        return headers;
    }


}//TeamService
