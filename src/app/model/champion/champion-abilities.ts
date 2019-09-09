import { Ability } from './abilities/ability';
export class ChampionAbilities {

   constructor(private abilities: Ability[]) {}

   getAbilities(): Ability[]
   {
      return this.abilities;
   }
}
