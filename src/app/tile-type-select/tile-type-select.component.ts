import { Component, OnInit } from '@angular/core';
import { TileTypeService } from "../tile-type.service";

@Component({
  selector: 'app-tile-type-select',
  templateUrl: './tile-type-select.component.html',
  styleUrls: ['./tile-type-select.component.css']
})
export class TileTypeSelectComponent implements OnInit {

  tileSelection:string[] = [
    'Wall Small',
    'Wall Normal',
    'Wall Edge',
    'Character',
    'Finish Flag'
  ]

  tileSelectionType:number[] = [
    26,
    25,
    27,
    1,
    99
  ]

  tileSelectionTypeLookUpTable:{[index: number]: string} = {
    26: 'Wall Small',
    25: 'Wall Normal',
    27: 'Wall Edge',
    1: 'Character',
    99: 'Finish Flag',
  }

  tileSelectionSpriteUrls:string[] = [
    'url(../../assets/tiles/WALL-TILE-small-half.png)',
    'url(../../assets/tiles/WALL-TILE.png)',
    'url(../../assets/tiles/WALL-TILE-small-top.png)',
    'url(../../assets/tiles/D4Y-idle-sprite-export.png)',
    'url(../../assets/tiles/TIME-TRIAL-FINISH-sprite.png)'
  ]

  constructor(public tileType: TileTypeService) { }

  ngOnInit(): void {
    console.log(this.tileType.tileType)
  }

}
