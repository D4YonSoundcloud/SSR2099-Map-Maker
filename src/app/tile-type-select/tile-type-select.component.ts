import { Component, OnInit } from '@angular/core';
import { TileTypeService } from "../tile-type.service";
import {MapStateService} from "../map-state.service";
import {map} from "rxjs/operators";

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

  constructor(public tileType: TileTypeService, public mapGlobalState: MapStateService) { }

  ngOnInit(): void {
    console.log(this.tileType.tileType)
  }

  copyToClipBoard(mapState:number[]){
    let text = JSON.stringify(mapState);
    let input = document.createElement('textarea');

    console.log(text)

    input.innerHTML = text;
    document.body.appendChild(input);
    input.select();
    let result = document.execCommand('copy');
    document.body.removeChild(input);

    alert('Map copied to clip-board! Send it over to D4Y')

    return result;
  }

  resetMap(){
    this.mapGlobalState.setMapState(
      [
        0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,
        0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,
        0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,
        0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,
        0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,
        0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,
        0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,
        0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,
        0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,
        0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,0 ,
      ]
    )

    console.log('map reset!', this.mapGlobalState.mapState)
  }

}
