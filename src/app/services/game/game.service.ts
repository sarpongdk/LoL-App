import { ApiService } from './../api/api.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private baseUrl: string = "https://na1.api.riotgames.com/lol/spectator/v4/featured-games?api_key=";
  private httpOptions = {
    headers: new HttpHeaders({
      'Accept-Language': 'en-us'
    })
  };

  constructor(private http: HttpClient, private apiService: ApiService) { 
    this.baseUrl += apiService.getApiKey();
  }

  getFeaturedMatches(): Observable<any>
  {
    return this.http.get(this.baseUrl, this.httpOptions);
  }
}
