import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TileTypeService {

  tileType:number|any = 26;

  changeTileType(newTileType:number|any) {
    if(newTileType === 50){
      let newColor = prompt('Please enter a portal color (blue,green,purple)')

      newTileType = {
        start: null,
        end: null,
        color: newColor,
        value: 50,
      }
    }
    this.tileType = newTileType
    console.log(this.tileType, newTileType)
  }

  public setPortalStart(start:number){
    console.log(start)
    this.tileType.start = start;
  }

  public setPortalEnd(end:number){
    console.log(end);
    this.tileType.end = end;
  }
}
