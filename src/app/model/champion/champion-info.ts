export class ChampionInfo {

   constructor(private attack: number, private defense: number, private magic: number, private difficulty: number, private tags: string[]) {}

   getAttack(): number
   {
      return this.attack;
   }

   getDefense(): number
   {
      return this.defense;
   }

   getMagic(): number
   {
      return this.magic;
   }

   getDifficulty(): number
   {
      return this.difficulty;
   }

   getTags(): string[]
   {
      return this.tags
   }
}
