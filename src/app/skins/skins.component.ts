import { ChampionSkins } from './../model/champion/champion-skins';
import { Champion } from './../model/champion/champion';
import { ChampionService } from './../services/champion/champion.service';
import { Component, OnInit } from '@angular/core';
import { ImageService } from '../services/images/image.service';
import { Skin } from '../model/champion/skin/skin';

@Component({
  selector: 'app-skins',
  templateUrl: './skins.component.html',
  styleUrls: ['./skins.component.css']
})
export class SkinsComponent implements OnInit {
  champion: Champion;
  loading: boolean;

  constructor(private championService: ChampionService, private imageService: ImageService) {
    this.champion = new Champion(null, null, null, null, null, null, null);
    this.loading = true;
  }

  ngOnInit() {
    this.champion = this.championService.getClickedChampion();

    let skins = this.champion.getSkins();
    console.log(skins);
    // console.log(`${this.champion.getName()}_${this.champion.getSkins()[0].num}`);
  }

}
