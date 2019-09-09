import { Ability } from './abilities/ability';
import { Passive } from './abilities/passive';
import { ChampionSkins } from './champion-skins';
import { ChampionLore } from './champion-lore';
import { ChampionTips } from './champion-tips';
import { ChampionImage } from './champion-image';
import { ChampionInfo } from './champion-info';
import { ChampionStats } from './champion-stats';


export class Champion {
   private lore: ChampionLore;
   private tips: ChampionTips;
   private skins: ChampionSkins;
   private passive: Passive;
   private abilities: Ability[];

   constructor(private id: number, private name: string, private title: string, private stringId: string,
               private championImages: ChampionImage, private championStats: ChampionStats, private championInfo: ChampionInfo) 
   {
      this.abilities = [];
   }

   setPassive(passive: Passive): void
   {
      this.passive = passive;
   }

   getPassive(): Passive
   {
      return this.passive;
   }

   setAbilities(abilities: Ability[]): void
   {
      this.abilities = abilities;
   }

   getAbilities(): Ability[]
   {
      return this.abilities;
   }

   setSkins(skins: ChampionSkins): void
   {
      this.skins = skins;
   }

   getSkins(): ChampionSkins
   {
      return this.skins;
   }

   setTips(tips: ChampionTips): void
   {
      this.tips = tips;
   }

   getTips(): ChampionTips
   {
      return this.tips;
   }

   setLore(lore: ChampionLore): void
   {
      this.lore = lore;
   }

   getLore(): ChampionLore
   {
      return this.lore;
   }

   getId(): number
   {
      return this.id;
   }

   getName(): string
   {
      return this.name;
   }

   getTitle(): string
   {
      return this.title;
   }

   getImages(): ChampionImage
   {
      return this.championImages;
   }

   getStats(): ChampionStats
   {
      return this.championStats;
   }

   getInfo(): ChampionInfo
   {
      return this.championInfo;
   }

   toString(): string
   {
      return `Champion[name=${this.name}, title=${this.title}]`
   }

   getStringId(): string
   {
      return this.stringId;
   }
}
