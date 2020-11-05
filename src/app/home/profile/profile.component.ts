import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  object: any;
  constructor() { }

  ngOnInit(): void {
    this.object = JSON.parse(localStorage.getItem("user"));
  }

  onUpdate() {
    const password = this.object.password;
    const cpassword = this.object.cpassword;
    if (password === cpassword) {
      localStorage.setItem('user', JSON.stringify(this.object));
      alert('user Updated')
    } else {
      alert('Passwords do not match');
      this.object.reset();
    }
  }

}
