import { ChampionService } from './../champion/champion.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChampionGuard implements CanActivate {
  constructor(private championService: ChampionService, private router: Router) {}

  canActivate(): boolean 
  {
    if (this.championService.getClickedChampion() != null)
    {
      return true;
    }
    else
    {
      this.router.navigate(['/champions']);
      return false;
    } 
  }
  
}
