import { Rune } from '../rune';

export class Slot {
   constructor(private slotSize: number, private runes: Rune[]) {}

   getRunes(): Rune[]
   {
      return this.runes;
   }

   getSlotSize(): number
   {
      return this.slotSize;
   }
}
