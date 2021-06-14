import { Component, OnInit } from '@angular/core';
import { Input } from "@angular/core";

@Component({
  selector: 'app-map-editor-tile',
  templateUrl: './map-editor-tile.component.html',
  styleUrls: ['./map-editor-tile.component.css']
})
export class MapEditorTileComponent implements OnInit {
  @Input() tileType:number = 0;
  @Input() tileIndex:number | undefined

  cssTileStyle: { [index: string]: string } = {};

  //declare the index type for the object
  tileSpriteLookUpTable:{[index: number]: string} = {
    0: 'url(../../assets/tiles/background-tile.png)',
    1: 'url(../../assets/tiles/D4Y-idle-sprite-export.png)',
    25: 'url(../../assets/tiles/WALL-TILE.png)',
    26: 'url(../../assets/tiles/WALL-TILE-small-half.png)',
    27: 'url(../../assets/tiles/WALL-TILE-small-top.png)',
    99: 'url(../../assets/tiles/TIME-TRIAL-FINISH-sprite.png)',
  }

  constructor() { }

  ngOnInit(): void {
    this.cssTileStyle = {
      'background-image': this.tileSpriteLookUpTable[this.tileType]
    }
    console.log(this.cssTileStyle, this.tileType, this.tileIndex, this.tileSpriteLookUpTable[this.tileType])
  }
}
