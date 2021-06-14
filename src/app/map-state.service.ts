import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MapStateService {

  mapState:number[] = []


  constructor() { }

  setMapState(newMapState:number[]){
    this.mapState = newMapState;

    console.log(this.mapState)
  }

  /**
   * Changes the Map Tile the user clicks on to have the selected tile Type, or reset the tile if
   * the tileType chosen is the same as the tileType of the clicked tile
   */
  changeMapTile(tileIndexToChange:number, newTileType:number):void {

    if(this.mapState[tileIndexToChange] === newTileType){
      this.mapState[tileIndexToChange] = 0;
    } else {
      this.mapState[tileIndexToChange] = newTileType;
    }

  }

  getMapFromString(newMapState:string){
    this.mapState = JSON.parse(newMapState)
  }
}
