import { ChampionService } from './../services/champion/champion.service';
import { Component, OnInit } from '@angular/core';
import { ImageService } from '../services/images/image.service';
import { ChampionStats } from '../model/champion/champion-stats';
import { ChampionInfo } from '../model/champion/champion-info';
import { ChampionImage } from '../model/champion/champion-image';
import { Champion } from '../model/champion/champion';
import { Router } from '@angular/router';
import { SearchService } from '../services/search/search.service';

@Component({
  selector: 'app-champion-list',
  templateUrl: './champion-list.component.html',
  styleUrls: ['./champion-list.component.css']
})

export class ChampionListComponent implements OnInit {
  champions: Champion[];
  loading: boolean;

  constructor(private championService: ChampionService, private imageService: ImageService, private searchService: SearchService, private router: Router) { 
    this.champions = [];
    this.loading = true;
  }

  ngOnInit() {
    // get all available champions from api
    this.championService.getAllChampions()
      .subscribe((response) => {
        this.downloadChampionList(response);
      });
  }

  
  private downloadChampionList(response): void 
  {
    let payload = Object.keys(response.data).map(key => {
      return response.data[key];
    })

    payload.forEach((data) => {
      let stats = data.stats;
      let info = data.info;
      let images = data.image;
      let championSquareBaseUrl = this.imageService.getChampionSquareUrl();

      let championStats: ChampionStats = new ChampionStats(stats.armor, stats.attackdamage, stats.attackspeed, stats.hp, stats.movespeed, stats.mp);
      let championInfo: ChampionInfo = new ChampionInfo(info.attack, info.defense, info.magic, info.difficulty, data.tags);
      let championImages: ChampionImage = new ChampionImage(championSquareBaseUrl + images.full, images.sprite);
      let champion: Champion = new Champion(data.key, data.name, data.title, data.id, championImages, championStats, championInfo);

      this.champions.push(champion);
    });

    this.loading = false;
  }

  showDetails(champion: Champion): void
  {
    this.championService.setClickedChampion(champion);
    this.router.navigate([`/champions`, champion.getName()]); //, champion.getName()]);
  }

}
