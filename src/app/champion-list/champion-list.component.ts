import { ChampionService } from './../services/champion/champion.service';
import { Component, OnInit } from '@angular/core';
import { ImageService } from '../services/images/image.service';
import { ChampionStats } from '../model/champion/champion-stats';
import { ChampionInfo } from '../model/champion/champion-info';
import { ChampionImage } from '../model/champion/champion-image';
import { Champion } from '../model/champion/champion';
import { Router } from '@angular/router';

@Component({
  selector: 'app-champion-list',
  templateUrl: './champion-list.component.html',
  styleUrls: ['./champion-list.component.css']
})

export class ChampionListComponent implements OnInit {
  champions: Champion[];

  constructor(private championService: ChampionService, private imageService: ImageService, private router: Router) { 
    this.champions = [];
  }

  ngOnInit() {
    // get all available champions from api
    this.championService.getAllChampions()
      .subscribe((response) => {
        this.downloadChampionList(response);
      });
  }

  
  private downloadChampionList(response): void {
    var payload = Object.keys(response.data).map(key => {
      return response.data[key];
    })

    payload.forEach((data) => {
      var stats = data.stats;
      var info = data.info;
      var images = data.image;
      var championSquareBaseUrl = this.imageService.getChampionSquareUrl();

      var championStats: ChampionStats = new ChampionStats(stats.armor, stats.attackdamage, stats.attackspeed, stats.hp, stats.movespeed, stats.mp);
      var championInfo: ChampionInfo = new ChampionInfo(info.attack, info.defense, info.magic, info.difficulty, data.tags);
      var championImages: ChampionImage = new ChampionImage(championSquareBaseUrl + images.full, images.sprite);
      var champion: Champion = new Champion(data.key, data.name, data.title, data.id, championImages, championStats, championInfo);

      this.champions.push(champion);
    });
  }

  showDetails(champion: Champion): void
  {
    this.championService.setClickedChampion(champion);
    this.router.navigate([`/champions`, champion.getName()]); //, champion.getName()]);
  }

}
