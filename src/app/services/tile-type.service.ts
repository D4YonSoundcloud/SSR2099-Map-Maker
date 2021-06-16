import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TileTypeService {

  tileType:number|any = 26;
  portalsArray:any[] = [];
  portalsArrayCurrentIndex:number = -1;
  showPortalColorSelect:boolean = false;
  newColor:string = '';

  changeTileType(newTileType:number|any):boolean|void {
    if(newTileType === 50){
      if(this.newColor === ''){
        console.log('there is no color')
        return this.openPortalColorSelect(true)
      } else {
        this.closePortalColorSelect(false)
        this.portalsArrayCurrentIndex++;

        newTileType = {
          start: null,
          end: null,
          color: this.newColor,
          value: 50,
          portalArrayIndex: this.portalsArrayCurrentIndex,
        };

        this.portalsArray.push(newTileType)
        this.newColor = '';
        console.log(this.portalsArray, this.portalsArrayCurrentIndex, this.newColor, this.showPortalColorSelect)
      }

      this.tileType = newTileType;
      console.log(this.tileType, newTileType);
      }
  }

  public changePortalColor(color:string){
    this.newColor = color;
    console.log(this.newColor)
    setTimeout(() => {
      this.changeTileType(50);
    }, 500)
  }

  public async setPortalStart(start:number){
    console.log(start);
    this.tileType.start = start;
  }

  public async setPortalEnd(end:number){
    console.log(end);
    this.tileType.end = end;
  }

  public openPortalColorSelect(open:boolean):boolean{
    return this.showPortalColorSelect = open;
  }

  public closePortalColorSelect(open:boolean):boolean{
    return this.showPortalColorSelect = open;
  }
}
