import { Slot } from './slot/slot';
import { AbstractRune } from './abstract-rune';

export class RunePath extends AbstractRune {
   constructor(id: number, name: string, icon: string, private slots: Slot[]) {
      super(id, name, icon);
   }

   getSlots(): Slot[]
   {
      return this.slots;
   }
}
