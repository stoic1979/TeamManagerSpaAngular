import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';
import { Users } from '../users/users';

@Injectable()
export class UsersService {
  constructor(
  	private http: Http
  	) { }
 
  getUsers(){

  }

  getUser(){

  }

  getUserByName(){

  }


}
