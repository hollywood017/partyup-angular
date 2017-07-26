import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Subject } from 'rxjs/Subject';
import { environment } from '../../environments/environment';

@Injectable()
export class AuthService {

  private loggedInSource = new Subject<any>();
  logged$ = this.loggedInSource.asObservable();

  constructor(
      private httpThang: Http
  ) { }
  //POST signup
  //an argument for each "req.body" in the API route
  signup(theUsername, theEmail, thePassword){

    return this.httpThang
    .post(
      environment.apiBase + '/api/signup',

      //Form body information to send to the back end(req.body)
      {
        signupUsername: theUsername,
        signupEmail: theEmail,
        signupPassword: thePassword
      },

      //Send the cookies across domains
      { withCredentials: true }
    )
    //convert observable to a promise
    .toPromise()
    .then(res => res.json())
    .then((userInfo) => {
      this.loginStatus(userInfo);
      return userInfo;
    })
  }


  //POST login
  login(theEmail, thePassword) {
    console.log(environment.apiBase);
    return this.httpThang
    .post(
      environment.apiBase + '/api/login',

      //Form body information to send to the back end (req.body)
      {
        loginEmail: theEmail,
        loginPassword: thePassword
      },

      //send the cookies across domains
      { withCredentials: true }
    )
    //convert observable to a promise
    .toPromise()
    //parse the JSON
    .then(res => res.json())
    .then((userInfo) => {
      this.loginStatus(userInfo);
      return userInfo;
    })
  }//close login


  //POST logout
  logout(){
    return this.httpThang
    .post(
      environment.apiBase + '/api/logout',

      //Nothing to send to the back end (req.body)
      {},
      { withCredentials: true }
    )
    //convert observable to a promise
    .toPromise()
    //parse the JSON
    .then(res => res.json())
    .then((userInfo) => {
      this.loginStatus(false);
      return userInfo;
    })
  }//close logout


  //GET checklogin
  checklogin(){
    return this.httpThang
    .get(
      environment.apiBase + '/api/checklogin',
      { withCredentials: true }
    )
    //convert observable to a promise
    .toPromise()
    //parse the JSON
    .then(res => res.json())
    .then((userInfo) => {
      this.loginStatus(userInfo);
      return userInfo;
    })
  }// close checklogin

  loginStatus(userStatus){
    this.loggedInSource.next(userStatus);
  }

}
