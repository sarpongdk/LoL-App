import { Slot } from './../model/runes/slot/slot';
import { Rune } from './../model/runes/rune';
import { Component, OnInit } from '@angular/core';
import { RuneService } from '../services/rune.service';
import { RunePath } from '../model/runes/rune-path';
import { ImageService } from '../services/images/image.service';

@Component({
  selector: 'app-runes',
  templateUrl: './runes.component.html',
  styleUrls: ['./runes.component.css']
})
export class RunesComponent implements OnInit {
  runePath: RunePath[];

  constructor(private runeService: RuneService, private imageService: ImageService) { 
    this.runePath = [];
  }

  ngOnInit() {
    this.runeService.getRunes()
                    .subscribe((runePaths) => {                     
                      runePaths.forEach((payload) => {
                        // console.log(payload);
                        let id: number = payload.id;
                        let name: string = payload.name;
                        let icon: string = payload.icon;
                        let slots: Slot[] = [];

                        // console.log(`Name: ${name}`);
                        // console.log(`Icon: ${icon}`);
                        for (let i = 0; i < payload.slots.length; i++)
                        {
                          let runes = payload.slots[i].runes;
                          let championRunes: Rune[] = [];
                          // console.log(runes);

                          for (let j = 0; j < runes.length; j++)
                          {
                            let rune = new Rune(runes[j].id, runes[j].name, runes[j].icon, runes[j].shortDesc, runes[j].longDesc);
                            championRunes.push(rune);
                          }

                          let slot = new Slot(runes.length, championRunes);
                          slots.push(slot);

                        }
                        
                        let tree = new RunePath(id, name, icon, slots);
                        this.runePath.push(tree);
                        // console.log(this.runePath);
                      });

                    })
  }

}
