import { ChampionAbilities } from './../model/champion/champion-abilities';
import { Ability } from './../model/champion/abilities/ability';
import { ChampionTips } from './../model/champion/champion-tips';
import { ChampionLore } from './../model/champion/champion-lore';
import { Champion } from './../model/champion/champion';
import { ChampionService } from './../services/champion/champion.service';
import { Component, OnInit } from '@angular/core';
import { Passive } from '../model/champion/abilities/passive';
import { ImageService } from '../services/images/image.service';

@Component({
  selector: 'app-champion-detail',
  templateUrl: './champion-detail.component.html',
  styleUrls: ['./champion-detail.component.css']
})
export class ChampionDetailComponent implements OnInit {
  champion: Champion;
  loading: boolean;

  constructor(private championService: ChampionService, private imageService: ImageService) { 
    this.loading = true;
  }

  ngOnInit() {
    this.champion = this.championService.getClickedChampion(); 
    this.championService.getChampionDetails(this.champion)
      .subscribe((response) => {
 
        this.loading = true;

        var champId: string = this.champion.getStringId();
        var champData = response.data[champId];

        var passive = champData.passive;
        var skins = champData.skins;
        var spells: object[] = champData.spells;
        
        var lore = new ChampionLore(champData.lore, champData.blurb);
        var tips = new ChampionTips(champData.allytips, champData.enemytips);
        var championPassive = new Passive(passive.name, passive.description, passive.image.full);

        var abilities: Ability[] = [];
        for (let i = 0; i < spells.length; i++)
        {
          var spell = spells[i];
          //@ts-ignore
          var ability: Ability = new Ability(spell.id, spell.name, spell.maxRank, spell.cooldown, spell.cost, spell.image.full);
          abilities.push(ability);
        }

        this.champion.setAbilities(abilities);
        this.champion.setLore(lore);
        this.champion.setPassive(championPassive);
        this.champion.setSkins(skins);
        this.champion.setTips(tips);

        this.loading = false;
      });
  }

}
