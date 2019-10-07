import { AbstractRune } from './abstract-rune';

export class Rune extends AbstractRune
{
   constructor(id: number, name: string, icon: string, private shortDescription: string, private longDescription: string) 
   {
      super(id, name, icon);
   }

   getShortDescription(): string
   {
      return this.shortDescription;
   }

   getLongDescription(): string
   {
      return this.longDescription;
   }
}
