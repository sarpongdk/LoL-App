export class Ability {
   keyBinding: string;

   constructor(private id: string, private name: string, private maxRank: number, private cooldown: number[], private cost: number[], private imgUrl: string) 
   {
      this.keyBinding = this.extractLastCharacter(id);
   }

   private extractLastCharacter(id: string): string
   {
      return id[id.length - 1];
   }

   getName(): string
   {
      return this.name;
   }

   getMaxRank(): number
   {
      return this.maxRank;
   }

   getCooldownProgression(): number[]
   {
      return this.cooldown;
   }

   getCostProgression(): number[]
   {
      return this.cost;
   }

   getImageUrl(): string
   {
      return this.imgUrl;
   }

   getKeyBinding(): string
   {
      return this.keyBinding;
   }

   getCost(): number[]
   {
      return this.cost;
   }
}
