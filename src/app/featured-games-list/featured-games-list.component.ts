import { GameService } from './../services/game/game.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-featured-games-list',
  templateUrl: './featured-games-list.component.html',
  styleUrls: ['./featured-games-list.component.css']
})
export class FeaturedGamesListComponent implements OnInit {
  games: object[];

  constructor(private gameService: GameService) 
  {
    this.games = [];  
  }

  ngOnInit() {
    this.gameService.getFeaturedMatches()
      .subscribe((response) => {
        

        this.games = response.gameList;
        console.log(this.games);
      });
  }

}
