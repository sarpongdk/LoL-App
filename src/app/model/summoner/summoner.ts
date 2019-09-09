import { AccountInfo } from './account-info';

export class Summoner {
   constructor(private name: string, private level: number, private accountInfo: AccountInfo) {}

   getName(): string
   {
      return this.name;
   }

   getAccountInfo(): AccountInfo
   {
      return this.accountInfo;
   }

   getSummonerLevel(): number
   {
      return this.level;
   }
}
