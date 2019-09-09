export class Skin {
   constructor(private id: number, private num: number, private name: string, private chromas: boolean) {}

   getId(): number
   {
      return this.id;
   }

   getNumber(): number
   {
      return this.num;
   }

   getName(): string
   {
      return this.name;
   }

   hasChromas(): boolean
   {
      return this.chromas;
   }
}
