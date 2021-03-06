import { Component, OnInit } from '@angular/core';
import { TileTypeService } from "../services/tile-type.service";
import {MapStateService} from "../services/map-state.service";
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
    'Portal',
    'Character',
    'Finish Flag'
  ]

  tileSelectionType:number[] = [
    26,
    25,
    27,
    50,
    1,
    99
  ]

  tileSelectionTypeLookUpTable:{[index: number]: string} = {
    26: 'Wall Small',
    25: 'Wall Normal',
    27: 'Wall Edge',
    50: 'Portal',
    1: 'Character',
    99: 'Finish Flag',
  }

  tileSelectionSpriteUrls:string[] = [
    'url(../../assets/tiles/WALL-TILE-small-half.png)',
    'url(../../assets/tiles/WALL-TILE.png)',
    'url(../../assets/tiles/WALL-TILE-small-top.png)',
    'url(../../assets/tiles/portal-tile-1.png)',
    'url(../../assets/tiles/D4Y-idle-sprite-export.png)',
    'url(../../assets/tiles/TIME-TRIAL-FINISH-sprite.png)'
  ]

  portalColorsSelection:string[] = [
    'purple',
    'blue',
    'green',
    'yellow',
    'orange',
    'red',
    'aqua',
    'plum',
  ]

  constructor(public tileType: TileTypeService, public mapGlobalState: MapStateService) { }

  ngOnInit(): void {
    console.log(this.tileType.tileType)
  }

  copyToClipBoard(mapState:(number | { start: number,end: number,color: string,value: number })[]){
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

  async setCustomMap(){
    if(this.mapGlobalState.setMapInputOpened){
      return console.log('its already open')
    } else {
      console.log('opening map input')
      this.mapGlobalState.openMapInput(true)
    }
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

  checkIfObject(tile:(number| { start: number,end: number,color: string,value: number })){
    return typeof tile === 'object' && tile !== null
  }
}
