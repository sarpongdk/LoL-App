import { Champion } from './../model/champion/champion';
import { ChampionService } from './../services/champion/champion.service';
import { Component, OnInit } from '@angular/core';
import { ImageService } from '../services/images/image.service';

@Component({
  selector: 'app-recommended',
  templateUrl: './recommended.component.html',
  styleUrls: ['./recommended.component.css']
})
export class RecommendedComponent implements OnInit {
  champion: Champion;

  constructor(private championService: ChampionService, private imageService: ImageService) { }

  ngOnInit() {
    this.champion = this.championService.getClickedChampion();

    console.log(this.champion);
  }

}
