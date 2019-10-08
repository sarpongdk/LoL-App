import { HttpClient } from '@angular/common/http';
import { ApiService } from './api/api.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RuneService {
  url: string;

  constructor(private apiService: ApiService, private http: HttpClient) { 
    this.url = `http://ddragon.leagueoflegends.com/cdn/${ this.apiService.getVersion() }/data/en_US/runesReforged.json`;
  }

  getRunes(): Observable<any>
  {
    return this.http.get(this.url);
  }
}
