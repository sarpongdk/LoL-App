import { ApiService } from './../api/api.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  profileIconUrl: string;
  championSquareUrl: string;
  championSkinSplashUrl: string;
  championLoadingUrl: string;
  abilitiesUrl: string;
  passiveUrl: string;
  runeUrl: string;

  constructor(private http: HttpClient, private apiService: ApiService) 
  {
    this.championSquareUrl = `http://ddragon.leagueoflegends.com/cdn/${ this.apiService.getVersion() }/img/champion/`;
    this.passiveUrl = `http://ddragon.leagueoflegends.com/cdn/${ this.apiService.getVersion() }/img/passive/`
    this.abilitiesUrl = `http://ddragon.leagueoflegends.com/cdn/${ this.apiService.getVersion() }/img/spell/`;
    this.championSkinSplashUrl = `http://ddragon.leagueoflegends.com/cdn/img/champion/splash/`;
    this.runeUrl = `https://ddragon.leagueoflegends.com/cdn/img/`; //https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/7200_Domination.png
  }

  getChampionSquareUrl(): string
  {
    return this.championSquareUrl;
  }

  getPassiveUrl(): string
  {
    return this.passiveUrl;
  }

  getAbilitiesUrl(): string
  {
    return this.abilitiesUrl;
  }

  getChampionSkinUrl(): string
  {
    return this.championSkinSplashUrl;
  }

  getRuneUrl(): string
  {
    return this.runeUrl;
  }
}
