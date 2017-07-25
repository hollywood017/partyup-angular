import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  emailValue: string;
  passwordValue: string;

  constructor(
    private authThang: AuthService,
    private routerThang: Router
  ) { }

  ngOnInit() {
    console.log("login in page");
  }

  doLogin() {
    console.log("do login in is good to go")
    this.authThang.login(this.emailValue, this.passwordValue)
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
