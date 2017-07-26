import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { environment } from '../../environments/environment';

@Injectable()
export class PubgService {

  constructor(
    private httpThang: Http
  ) { }

  //POST Stats from api
  pubgStats(thePubgUsername: string){
    return this.httpThang
    .post(
      environment.apiBase + '/api/pubgStats',
      //form body information to send to the back end(req.body)
      {
        pubgNickname: thePubgUsername
      },
      { withCredentials: true }
    )
    .toPromise()
    .then(res => res.json())
  }//close pubgStats
}
