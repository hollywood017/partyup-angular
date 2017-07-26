import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PubgService } from '../services/pubg.service';

@Component({
  selector: 'app-pubg',
  templateUrl: './pubg.component.html',
  styleUrls: ['./pubg.component.scss']
})
export class PubgComponent implements OnInit {

  pubgNameValue: string;

  constructor(
    private gameService: PubgService,
    private routerThang: Router
  ) { }

  ngOnInit() {
    console.log("anything");
  }

  doGetStats(){
    console.log("getting stats is working");
    this.gameService.pubgStats(this.pubgNameValue)
    .then((resultFromApi) => {
      console.log(resultFromApi);
    })
    .catch((err) => {
      alert('Error');
      console.log('This is the err' + err);
    });
  }

}
