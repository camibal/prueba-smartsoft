import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  LoginForm: FormGroup;

  constructor(public formbuilder: FormBuilder, private router: Router) {
    //validate form
    this.LoginForm = this.formbuilder.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(3)]],
    });
  }

  ngOnInit(): void {
  }

  onLogin() {
    const object = JSON.parse(localStorage.getItem("user"));
    const username = object.username;
    const password = object.password;
    if (username === this.LoginForm.value.username) {
      if (password === this.LoginForm.value.password) {
        localStorage.setItem('token', JSON.stringify(this.LoginForm.value));
        alert('Successful login');
        this.router.navigate(['/']);
      } else {
        alert('Invalid Password');
        this.LoginForm.reset();
      }
    } else {
      alert('Invalid username');
      this.LoginForm.reset();
    }
  }

}
