import { Component, OnInit } from '@angular/core';
import { Input } from "@angular/core";
import { AfterViewInit, ElementRef} from '@angular/core';
import {MapStateService} from "../services/map-state.service";
import {TileTypeService} from "../services/tile-type.service";

@Component({
  selector: 'app-map-editor-tile',
  templateUrl: './map-editor-tile.component.html',
  styleUrls: ['./map-editor-tile.component.css']
})
export class MapEditorTileComponent implements OnInit {
  @Input() tileType:(number|any) = 0;
  @Input() tileIndex:number | undefined

  cssTileStyle: { [index: string]: string } = {};

  mouseEntered:boolean = false;
  mouseCoolDown:boolean = false;

  //declare the index type for the object
  tileSpriteLookUpTable:{[index: number]: string} = {
    0: 'url(../../assets/tiles/background-tile.png)',
    1: 'url(../../assets/tiles/D4Y-idle-sprite-export.png)',
    25: 'url(../../assets/tiles/WALL-TILE.png)',
    26: 'url(../../assets/tiles/WALL-TILE-small-half.png)',
    27: 'url(../../assets/tiles/WALL-TILE-small-top.png)',
    50: 'url(../../assets/tiles/portal-tile-1.png)',
    99: 'url(../../assets/tiles/TIME-TRIAL-FINISH-sprite.png)',
  }

  hueDegreesLookUpTable:{[index:string]: number} = {
    'purple': 260,
    'green': 50,
    'blue': 130,
  }

  constructor(private elementRef:ElementRef, public mapGlobalState: MapStateService, public globalTileType: TileTypeService) { }

  ngOnInit(): void {
    console.log(this.cssTileStyle, this.tileType, this.tileIndex)
  }

  // ngAfterViewInit(): void {
  //   this.elementRef.nativeElement.querySelector(this.findTileClassName()).addEventListener('mouseenter', (e:any) => {
  //     if(!this.mouseEntered) {
  //       this.mouseEntered = true;
  //     }
  //   });
  //
  //   this.elementRef.nativeElement.querySelector(this.findTileClassName()).addEventListener('mousedown', (e:any) => {
  //
  //     if(this.mouseCoolDown) return;
  //
  //     if (this.tileIndex != null) {
  //       if(this.mouseEntered) {
  //
  //         this.mapGlobalState.changeMapTile(this.tileIndex, this.globalTileType.tileType)
  //         this.mouseCoolDown = true;
  //         this.startMouseCoolDown()
  //       }
  //     }
  //   });
  //
  // }

  findTileClassName(): string {
    return (this.tileType === 25 || this.tileType === 27) ? '.tile-long' : '.tile'
  }

  startMouseCoolDown(){
    setTimeout(() => {
      this.mouseEntered = false
      this.mouseCoolDown = false;
    }, 500)
  }

  checkIfObject(tile:(number | { start: number,end: number,color: string,value: number })){
    console.log(typeof tile === 'object' && tile !== null)
    return typeof tile === 'object' && tile !== null
  }
}
