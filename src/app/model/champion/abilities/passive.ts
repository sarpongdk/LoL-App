export class Passive {
   constructor(private name: string, private description: string, private imageUrl: string) {}

   getName(): string
   {
      return this.name;
   }

   getDescription(): string
   {
      return this.description;
   }

   getImageUrl(): string
   {
      return this.imageUrl;
   }
}
