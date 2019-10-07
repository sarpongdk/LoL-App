import { Ability } from './../model/champion/abilities/ability';
import { Champion } from './../model/champion/champion';
import { ChampionService } from './../services/champion/champion.service';
import { Component, OnInit } from '@angular/core';
import { ImageService } from '../services/images/image.service';

@Component({
  selector: 'app-spell',
  templateUrl: './spell.component.html',
  styleUrls: ['./spell.component.css']
})
export class SpellComponent implements OnInit {
  champion: Champion;

  constructor(private championService: ChampionService, private imageService: ImageService) 
  { 
    this.champion = new Champion(null, null, null, null, null, null, null);
  }

  ngOnInit() {
    this.champion = this.championService.getClickedChampion();
  }

}
