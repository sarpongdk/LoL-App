import { Champion } from './../model/champion/champion';
import { ChampionService } from './../services/champion/champion.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lore',
  templateUrl: './lore.component.html',
  styleUrls: ['./lore.component.css']
})
export class LoreComponent implements OnInit {
  champion: Champion;

  constructor(private championService: ChampionService) {
    this.champion = new Champion(null, null, null, null, null, null, null);
  }

  ngOnInit() 
  {
    this.champion = this.championService.getClickedChampion();
  }

}
