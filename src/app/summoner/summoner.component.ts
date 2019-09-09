import { SummonerService } from './../services/summoner/summoner.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-summoner',
  templateUrl: './summoner.component.html',
  styleUrls: ['./summoner.component.css']
})
export class SummonerComponent implements OnInit {
  query: string;

  constructor(private summonerService: SummonerService) { 
    this.query = "";
  }

  ngOnInit() {
  }

  private invalidQuery(): boolean
  {
    return (!this.query || this.query === "");
  }

  onSubmitByEnter(): void
  {
    if (this.invalidQuery())
    {
      return;
    }

    this.summonerService.getSummonerByName(this.query.toLowerCase())
      .subscribe((response) => {
        console.log(response);

      });

  }
}
