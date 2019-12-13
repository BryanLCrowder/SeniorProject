import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { User } from '../_models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
@Output() cancelRegister = new EventEmitter();
user: User;
registerForm: FormGroup;
  constructor(private authServive: AuthService,
              private router: Router,
              private alertify: AlertifyService,
              private fb: FormBuilder) { }

  ngOnInit() {
    this.createRegisterFrom();
    // this.registerForm = new FormGroup({
    //   username: new FormControl('', Validators.required),
    //   password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    //   confirmPassword: new FormControl('', Validators.required)
    // }, this.passwordMatchValidator);
  }

  createRegisterFrom() {
    this.registerForm = this.fb.group({
      gender: ['male'],
      knownAs: ['', Validators.required],
      dateOfBirth: [null, Validators.required],
      carGroup: [''],
      city: ['', Validators.required],
      country: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', Validators.required]
    }, {Validator: this.passwordMatchValidator});
  }

passwordMatchValidator(g: FormGroup) {
  // tslint:disable-next-line: object-literal-key-quotes
  return g.get('password').value === g.get('confirmPassword').value ? null : {'mismatch' : true};
}

register() {
  if (this.registerForm.valid) {
    this.user = Object.assign({}, this.registerForm.value);
    this.authServive.register(this.user).subscribe(() => {
      this.alertify.success('Registration Successful!!');
    }, error => {
      this.alertify.error(error);
    }, () => {
      this.authServive.login(this.user).subscribe(() => {
        this.router.navigate(['/friends']);
      });
    });
  }
}
cancel() {
  this.cancelRegister.emit(false);
  this.alertify.warning('Cancelled...');
}

}
