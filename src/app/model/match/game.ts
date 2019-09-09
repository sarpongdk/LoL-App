import { Summoner } from './../summoner/summoner';
import { Player } from './../summoner/player';

export class Game {
   constructor(private id: number, private gameMode: string, private mapId: number, private participants: Summoner[]) {}

   getGameId(): number
   {
      return this.id;
   }

   getParticipants(): Summoner[]
   {
      return this.participants;
   }

   getGameMode(): string
   {
      return this.gameMode;
   }

   getMapId(): number
   {
      return this.mapId;
   }
}
