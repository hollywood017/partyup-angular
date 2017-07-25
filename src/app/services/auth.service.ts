import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AuthService {

  constructor(
      private httpThang: Http
  ) { }
  //POST signup
  //an argument for each "req.body" in the API route
  signup(theUsername, theEmail, thePassword){
    return this.httpThang
    .post(
      'http://localhost:3000/api/signup',

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
  }


  //POST login
  login(theEmail, thePassword) {
    return this.httpThang
    .post(
      'http://localhost:3000/api/login',

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
  }//close login


  //POST logout
  logout(){
    return this.httpThang
    .post(
      'http://localhost:3000/api/logout',

      //Nothing to send to the back end (req.body)
      {},
      { withCredentials: true }
    )
    //convert observable to a promise
    .toPromise()
    //parse the JSON
    .then(res => res.json())
  }//close logout


  //GET checklogin
  checklogin(){
    return this.httpThang
    .get(
      'http://localhost:3000/api/checklogin',
      { withCredentials: true }
    )
    //convert observable to a promise
    .toPromise()
    //parse the JSON
    .then(res => res.json())
  }// close checklogin

}
