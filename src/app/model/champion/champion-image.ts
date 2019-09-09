import { ImageService } from 'src/app/services/images/image.service';

export class ChampionImage {

   constructor(private fullImageFilename: string, private spriteFilename: string) {}

   getFullImageFilename(): string
   {
      return this.fullImageFilename;
   }

   getSpriteFilename(): string
   {
      return this.spriteFilename;
   }
}
