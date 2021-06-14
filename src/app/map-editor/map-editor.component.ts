import { Component, OnInit } from '@angular/core';
import { TileTypeService} from "../tile-type.service";

@Component({
  selector: 'app-map-editor',
  templateUrl: './map-editor.component.html',
  styleUrls: ['./map-editor.component.css']
})
export class MapEditorComponent implements OnInit {

  mapEditorState:number[] = [
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

  constructor(public tileType: TileTypeService) { }

  ngOnInit(): void {
  }

  /**
   * Changes the Map Tile the user clicks on to have the selected tile Type, or reset the tile if
   * the tileType chosen is the same as the tileType of the clicked tile
   */
  changeMapTile(tileIndexToChange:number, newTileType:number):void {
    if(this.mapEditorState[tileIndexToChange] === newTileType){
      this.mapEditorState[tileIndexToChange] = 0;
    } else {
      this.mapEditorState[tileIndexToChange] = newTileType;
    }
  }

}
