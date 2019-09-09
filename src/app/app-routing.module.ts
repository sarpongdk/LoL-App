import { ChampionGuard } from './services/guards/champion.guard';
import { LoreComponent } from './lore/lore.component';
import { SpellComponent } from './spell/spell.component';
import { SkinsComponent } from './skins/skins.component';
import { ChampionDetailComponent } from './champion-detail/champion-detail.component';
import { SummonerComponent } from './summoner/summoner.component';
import { FeaturedGamesListComponent } from './featured-games-list/featured-games-list.component';
import { ChampionListComponent } from './champion-list/champion-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemsListComponent } from './items-list/items-list.component';
import { RecommendedComponent } from './recommended/recommended.component';


const routes: Routes = [
  {
    path: "champions/:championName",
    component: ChampionDetailComponent,
    children: [
      { path: "skins", component: SkinsComponent },
      { path: "spells", component: SpellComponent },
      { path: "lore", component: LoreComponent },
      { path: "recommended", component: RecommendedComponent }
    ],
    canActivate: [ChampionGuard]
  },
  {
    path: "champions",
    component: ChampionListComponent
  },
  {
    path: "featured-games",
    component: FeaturedGamesListComponent
  },
  {
    path: "items",
    component: ItemsListComponent
  },
  {
    path: "summoner",
    component: SummonerComponent
  },
  {
    path: "", 
    redirectTo: "champions", 
    pathMatch: "full"
  },
  {
    path: "**",
    redirectTo: "champions",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }