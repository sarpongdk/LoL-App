export class AbstractRune {
   constructor(protected id: number, protected name: string, protected icon: string) {}

   getId(): number
   {
      return this.id;
   }

   getName(): string
   {
      return this.name;
   }

   getIconPath(): string
   {
      return this.icon;
   }
}
