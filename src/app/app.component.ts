import { ImageService } from './services/images/image.service';
import { ChampionImage } from './model/champion/champion-image';
import { ChampionInfo } from './model/champion/champion-info';
import { ChampionStats } from './model/champion/champion-stats';
import { Champion } from './model/champion/champion';
import { ChampionService } from './services/champion/champion.service';
import { GameService } from './services/game/game.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor() {}

  ngOnInit() {

  }

}