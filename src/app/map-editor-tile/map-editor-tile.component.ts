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
  @Input() tileType:number = 0;
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
    99: 'url(../../assets/tiles/TIME-TRIAL-FINISH-sprite.png)',
  }

  constructor(private elementRef:ElementRef, public mapGlobalState: MapStateService, public globalTileType: TileTypeService) { }

  ngOnInit(): void {
    this.cssTileStyle = {
      'background-image': this.tileSpriteLookUpTable[this.tileType]
    }
    console.log(this.cssTileStyle, this.tileType, this.tileIndex, this.tileSpriteLookUpTable[this.tileType])
  }

  ngAfterViewInit(): void {
    this.elementRef.nativeElement.querySelector(this.findTileClassName()).addEventListener('mouseenter', (e:any) => {
      if(!this.mouseEntered) {
        this.mouseEntered = true;
      }

      console.log(this.mouseEntered)
    });

    this.elementRef.nativeElement.querySelector(this.findTileClassName()).addEventListener('mousedown', (e:any) => {
      console.log(this.mouseCoolDown, this.tileIndex)

      if(this.mouseCoolDown) return;

      if (this.tileIndex != null) {
        if(this.mouseEntered) {

          this.mapGlobalState.changeMapTile(this.tileIndex, this.globalTileType.tileType)
          this.mouseCoolDown = true;
          this.startMouseCoolDown()

          console.log('we have changed the tile')
        }
      }
    });

    console.log('we have added the mouseenter and mousedown event listener')
  }

  findTileClassName(): string {
    return (this.tileType === 25 || this.tileType === 27) ? '.tile-long' : '.tile'
  }

  startMouseCoolDown(){
    setTimeout(() => {
      this.mouseEntered = false
      this.mouseCoolDown = false;
    }, 500)
  }

}
