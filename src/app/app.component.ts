import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'app';
  loggedIn: boolean = false;


  constructor(
      private authThang: AuthService,
  ) { }

  ngOnInit() {
  }

  isloggedin(){
    this.authThang.checklogin()
    .then(() => {
      this.loggedIn = true;
    })
    .catch(() => {
      this.loggedIn =false;
    })

  }


}
