import {Injectable} from '@angular/core';
import {map} from "rxjs/operators";
import {TileTypeService} from "./tile-type.service";

@Injectable({
  providedIn: 'root'
})
export class MapStateService {

  mapState:(number | any)[] = []

  setMapInputOpened:boolean = false;

  constructor(public globalTileType: TileTypeService) { }

  setMapState(newMapState:(number | { start: number,end: number,color: string,value: number })[]){
    this.mapState = newMapState;

    console.log(this.mapState)
  }

  /**
   * Changes the Map Tile the user clicks on to have the selected tile Type, or reset the tile if
   * the tileType chosen is the same as the tileType of the clicked tile
   */
  changeMapTile(tileIndexToChange:(number), newTileType:number) {
    console.log(this.globalTileType, tileIndexToChange, newTileType)

    if(this.checkIfObject(newTileType)) {
      console.log(this.globalTileType)
      if(this.globalTileType.tileType.start === null){
        console.log('this is being called')
        this.globalTileType.setPortalStart(tileIndexToChange)
        setTimeout(() => {
          if(this.globalTileType.tileType.end){
            return this.globalTileType.changeTileType(26)
          }
        }, 200)
      } else if (this.globalTileType.tileType.end === null) {
        this.globalTileType.setPortalEnd(tileIndexToChange)
        setTimeout(() => {
          if (this.globalTileType.tileType.start) {
            console.log('we are switching')
            return this.globalTileType.changeTileType(26)
          }
        }, 200)

      }
      /**
       * need to find a way to edit placed portals
       */
      // } else if (this.globalTileType.tileType.start !== null && this.globalTileType.tileType.end !== null) {
      //   if(this.globalTileType.tileType.start === tileIndexToChange){
      //     this.mapState[tileIndexToChange] = 0;
      //     if(this.globalTileType.tileType.end){
      //       return this.globalTileType.changeTileType(26)
      //     }
      //   } else if (this.globalTileType.tileType.end === tileIndexToChange) {
      //     this.mapState[tileIndexToChange] = 0
      //   }
      // }
    }

    if(this.mapState[tileIndexToChange] === newTileType){
      this.mapState[tileIndexToChange] = 0;
    } else {
      this.mapState[tileIndexToChange] = newTileType;
    }

  }

  getMapFromString(newMapState:string){
    this.mapState = JSON.parse(newMapState)
  }

  openMapInput(mapInputState:boolean){
    this.setMapInputOpened = mapInputState;
  }

  closeMapInput(mapInputState:boolean){
    this.setMapInputOpened = mapInputState;
  }

  checkIfObject(tile:(number| { start: number,end: number,color: string,value: number })){
    console.log(typeof tile === 'object' && tile !== null)
    return typeof tile === 'object' && tile !== null
  }
}
