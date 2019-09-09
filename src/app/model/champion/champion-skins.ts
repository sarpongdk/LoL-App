import { Skin } from './skin/skin';
export class ChampionSkins {
   constructor(private skins: Skin[]) {}

   getSkins(): Skin[]
   {
      return this.skins;
   }
}
