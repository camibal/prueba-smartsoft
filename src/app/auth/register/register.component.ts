import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  RegisterForm: FormGroup;

  constructor(public formbuilder: FormBuilder, private router: Router) {
    //validate form
    this.RegisterForm = this.formbuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      username: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]],
      cpassword: ['', [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]],
    });
  }

  ngOnInit(): void {
  }

  onRegister() {
    console.log(this.RegisterForm.value);
    const password = this.RegisterForm.value.password;
    const cpassword = this.RegisterForm.value.cpassword;
    if (password === cpassword) {
      localStorage.setItem('user', JSON.stringify(this.RegisterForm.value));
      alert('Successful registration');
      this.router.navigate(['/auth']);
    } else {
      alert('Passwords do not match');
      this.RegisterForm.reset();
    }

  }

  get name() { return this.RegisterForm.get('name'); }
  get username() { return this.RegisterForm.get('username'); }
  get password() { return this.RegisterForm.get('password'); }
}
