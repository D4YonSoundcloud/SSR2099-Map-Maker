import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TileTypeService {

  tileType:number = 26;

  changeTileType(newTileType:number) {
    this.tileType = newTileType
    console.log(this.tileType, newTileType)
  }
}
