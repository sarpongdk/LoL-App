import { Champion } from './../../model/champion/champion';
import { ApiService } from './../api/api.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChampionService {
  allChampionsUrl: string;
  individualChampionUrl: string;
  clickedChampion: Champion;

  constructor(private http: HttpClient, private apiService: ApiService) 
  { 
    this.allChampionsUrl = `http://ddragon.leagueoflegends.com/cdn/${ this.apiService.getVersion() }/data/en_US/champion.json`;
    this.individualChampionUrl = `http://ddragon.leagueoflegends.com/cdn/${ this.apiService.getVersion() }/data/en_US/champion`;
    this.clickedChampion = null;
  }

  getAllChampions(): Observable<any>
  {
    return this.http.get(this.allChampionsUrl);
  }

  getChampionDetails(champion: Champion): Observable<any>
  { 
    var url: string = `${this.individualChampionUrl}/${champion.getStringId()}.json`;

    return this.http.get(url);
  }

  setClickedChampion(champion: Champion): void
  {
    this.clickedChampion = champion;
  }

  getClickedChampion(): Champion
  {
    return this.clickedChampion;
  }
}
