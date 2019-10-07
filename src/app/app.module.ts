import { RouterModule } from '@angular/router';
import { ChampionService } from './services/champion/champion.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module'; // Added here
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GameService } from './services/game/game.service';
import { ImageService } from './services/images/image.service';
import { ChampionListComponent } from './champion-list/champion-list.component';
import { FeaturedGamesListComponent } from './featured-games-list/featured-games-list.component';
import { LoadingComponent } from './loading/loading.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ItemsListComponent } from './items-list/items-list.component';
import { SummonerComponent } from './summoner/summoner.component';
import { SummonerService } from './services/summoner/summoner.service';
import { ChampionDetailComponent } from './champion-detail/champion-detail.component';
import { SkinsComponent } from './skins/skins.component';
import { SpellComponent } from './spell/spell.component';
import { LoreComponent } from './lore/lore.component';
import { RecommendedComponent } from './recommended/recommended.component';
import { RunesComponent } from './runes/runes.component';
import { RuneService } from './services/rune.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ChampionListComponent,
    FeaturedGamesListComponent,
    LoadingComponent,
    SidebarComponent,
    ItemsListComponent,
    SummonerComponent,
    ChampionDetailComponent,
    SkinsComponent,
    SpellComponent,
    LoreComponent,
    RecommendedComponent,
    RunesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule,
    FormsModule
  ],
  providers: [
    GameService,
    ImageService,
    ChampionService,
    SummonerService,
    RuneService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
