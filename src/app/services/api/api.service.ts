import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private loading: boolean;
  private versioningUrl: string = "http://ddragon.leagueoflegends.com/api/versions.json";

  private endpoints: object = {
    euw: "euw1.api.riotgames.com",
    eune: "eun1.api.riotgames.com",
    na: "na1.api.riotgames.com",
    kr: "kr.api.riotgames.com"
  };
  private apiKey: string = "RGAPI-1f65bd4c-757c-453e-8533-1ffc169bc70a";
  private version: string = "9.17.1";

  constructor(private http: HttpClient) {
    this.loading = true;
    this.getMostRecentVersion()
      .subscribe((version) => {
        this.version = version;
      });
  }

  private getMostRecentVersion() {
    return this.http.get(this.versioningUrl)
      .pipe(map(response => {
        // @ts-ignore
        let data = response[0];
        console.log(data.toString());
        return data;
      }));
  }

  getApiKey(): string {
    return this.apiKey;
  }

  getVersion() {
    // this.loading = true;
    // let version = this.version;

    // this.http.get(this.versioningUrl)
    //     .subscribe((response) => {
    //       version = response[0];
    //       this.loading = false;
    //     }, () => {}, () => this.loading = false);

    // console.log(version);
    // return version;

    return this.version;
  }
}
