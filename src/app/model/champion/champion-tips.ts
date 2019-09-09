export class ChampionTips {
   constructor(private allyTips: string[], private enemyTips: string[]) {}

   getAllyTips(): string[]
   {
      return this.allyTips;
   }

   getEnemyTips(): string[]
   {
      return this.enemyTips;
   }
}
