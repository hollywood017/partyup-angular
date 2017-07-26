import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'app';
  currentUser: any = {};
  loggedIn: boolean = false;
  logoutError: string;


  constructor(
      private authThang: AuthService,
      private routerThang: Router
  ) { }

  ngOnInit() {
    this.isloggedin();

    this.authThang.logged$.subscribe((userStatus) => {
      if(userStatus){
        this.loggedIn = true;
        this.currentUser = userStatus;
      }
      else{
        this.loggedIn = false;
        this.currentUser = null;
      }
    })
  }

  isloggedin(){
    this.authThang.checklogin()
    .then((userFromApi) => {
      this.currentUser = userFromApi;
      this.loggedIn = true;
    })
    .catch(() => {
      this.loggedIn = false;
    })
  }

  logMeOut(){
    console.log("logging out")
    this.authThang.logout()
    .then(() => {
      this.routerThang.navigate(['']);
    })
    .catch(() => {
      console.log("Error")
      this.logoutError = "An Error occured while trying to logout."
    })
  }


}
