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

      if (this.globalTileType.tileType.start === null) {
        console.log('this is being called')
        this.globalTileType.setPortalStart(tileIndexToChange).then(() => {
          console.log('then is being called')
            if (this.globalTileType.tileType.end) {
              console.log('resetting tileType')
              return this.globalTileType.changeTileType(26)
            }
        })

      } else if (this.globalTileType.tileType.end === null) {

        this.globalTileType.setPortalEnd(tileIndexToChange).then(() => {
          console.log('then is being called')
            if (this.globalTileType.tileType.start) {
              console.log('resetting tileType')
              return this.globalTileType.changeTileType(26)
            }
        })
      }
    }
    /**
     * need to find a way to edit placed portals
     */
    if(this.mapState[tileIndexToChange] === newTileType){
      this.mapState[tileIndexToChange] = 0;
    } else {
      this.mapState[tileIndexToChange] = newTileType;
    }

    console.log(this.mapState)
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
    return typeof tile === 'object' && tile !== null
  }
}
