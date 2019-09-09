import { ApiService } from './../api/api.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SummonerService {
  baseUrl: string = "https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name";

  constructor(private http: HttpClient, private apiService: ApiService) {}

  getSummonerByName(name: string): Observable<any>
  {
    var url: string = `${this.baseUrl}/${name}?api_key=${this.apiService.getApiKey()}`;

    return this.http.get(url);
  }
}
