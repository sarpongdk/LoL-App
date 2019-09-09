export class AccountInfo {
   constructor(private id: number, private accountId: number, private puuid: number, private profileIconId: number) {}

   getId(): number
   {
      return this.id;
   }

   getAccountId(): number
   {
      return this.accountId;
   }

   getProfileIconId(): number
   {
      return this.profileIconId;
   }

   getPUUID(): number
   {
      return this.puuid;
   }
}
