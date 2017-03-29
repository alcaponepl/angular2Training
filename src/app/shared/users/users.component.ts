import { Component, OnInit } from '@angular/core';

import { UsersService } from '../users.service';

import { User } from '../User'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers: [UsersService]
})
export class UsersComponent implements OnInit {

  public users: Array<User> = [];

  constructor(private _usersService: UsersService) { }

  ngOnInit() {
    this._usersService.getUsers()
    .then(users => {
      this.users = users;
      console.log(this.users);
    })
  }

}
