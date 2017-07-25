import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {

  usernameValue: string;
  emailValue: string;
  passwordValue: string;

  constructor(
      private authThang: AuthService,
      private routerThang: Router
  ) { }

  ngOnInit() {
  }

  doSignUp(){
    console.log("do signup is good to go")
    this.authThang.signup(this.usernameValue, this.emailValue, this.passwordValue)
    .then((resultFromApi) => {
      this.routerThang.navigate(['']);
      console.log(resultFromApi);
    })
    .catch((err) => {
      alert('Error');
      console.log(err);
    });
  }

}
