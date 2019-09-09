export class ChampionLore {
   constructor(private lore: string, private blurb: string) {}

   getLore(): string
   {
      return this.lore;
   }

   getBlurb(): string
   {
      return this.blurb;
   }
}
