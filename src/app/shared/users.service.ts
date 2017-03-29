import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { User } from './User'

@Injectable()
export class UsersService {

  private _url = "https://jsonplaceholder.typicode.com/users";

  constructor(private _http: Http) { }

  getUsers(): Promise<Array<User>> {
    return this._http.get(this._url)
      .map(res => res.json())
      .toPromise();
  }

  createUser(user: User) {
    return this._http.post(this._url, JSON.stringify(user))
      .map(res => res.json);
  }

  getUser(id) {
    return this._http.get(this._url + "/" + id)
      .map(res => res.json());
  }

  removeUser(id) {
    return this._http.delete(this._url + "/" + id)
      .map(res => res.json());
  }

}
