import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, NG_VALUE_ACCESSOR } from '@angular/forms';
import { GlobalValidator } from '../globalValidator';
import { FormComponent } from '../prevent-unsaved-changes-guard';
import { UsersService } from '../users.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { User } from '../User'

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
  providers: [UsersService]
})
export class AddUserComponent implements OnInit, FormComponent {

  public form: FormGroup;
  public user = new User();
  public title:string = "";
  
  private userId: number;

  constructor(private _router: Router,
    private _fb: FormBuilder,
    private _route: ActivatedRoute,
    private _usersService: UsersService) {
    this.setFromGroup();  
    this.userId = +this._route.snapshot.params["id"];
    if((this.userId != null) && !isNaN(this.userId)) {
       this._usersService.getUser(this.userId)
      .subscribe(response => {
        this.user =  response;
        this.form.patchValue(this.user);
      });
      this.title = "Edit user";
    } else {
      this.title = "Add new user";
    }

  }

  private setFromGroup() {
    this.form = this._fb.group({
      username: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, GlobalValidator.mailFormat])],
      phone: ['', Validators.required],
      address: this._fb.group({
        street: ['', Validators.required],
        suite: ['', Validators.required],
        city: ['', Validators.required],
        zipcode: ['', Validators.required]
      })
    })
  }

  get username(): any { return this.form.get('username'); }
  get email(): any { return this.form.get('email'); }
  get phone(): any { return this.form.get('phone'); }
  get street(): any { return this.form.get('address.street'); }
  get suite(): any { return this.form.get('address.suite'); }
  get city(): any { return this.form.get('address.city'); }
  get zipcode(): any { return this.form.get('address.zipcode'); }

  ngOnInit() {
    
  }

  submit() {
    this.user = this.form.value;
    if(this.userId != null)
    this.user.id = this.userId;

    this._usersService.createUser(this.user)
      .subscribe(x => {
        this.form.markAsPristine();
        this._router.navigate(['users'])
      })

  }

}
