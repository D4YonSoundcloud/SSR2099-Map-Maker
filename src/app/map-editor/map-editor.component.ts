import { Component, OnInit } from '@angular/core';
import { TileTypeService} from "../tile-type.service";
import { MapStateService } from "../map-state.service";

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

  // mapEditorState:number[] = [0,0,26,26,0,26,0,0,0,26,26,0,0,26,0,0,0,26,0,26,0,26,0,0,26,26,26,26,0,0,0,0,26,0,26,26,26,26,26,26,26,0,26,0,1,26,0,99,0,26,0,0,26,26,26,26,0,26,0,26,0,26,26,0,0,0,0,26,0,26,0,0,26,0,26,26,26,26,0,26,26,0,26,0,26,0,0,0,0,26,0,0,26,0,0,0,26,26,26,26]


  constructor(public tileType: TileTypeService, public mapGlobalState: MapStateService) { }

  ngOnInit(): void {
    this.mapGlobalState.setMapState(this.mapEditorState)
  }

  /**
   * Changes the Map Tile the user clicks on to have the selected tile Type, or reset the tile if
   * the tileType chosen is the same as the tileType of the clicked tile
   */
  changeMapTile(tileIndexToChange:number, newTileType:number):void {

    if(this.mapEditorState[tileIndexToChange] === newTileType){

      //set the map editor state and then set the global map state, so we can easily copy it to clipboard
      this.mapEditorState[tileIndexToChange] = 0;
      this.mapGlobalState.setMapState(this.mapEditorState)

    } else {

      this.mapEditorState[tileIndexToChange] = newTileType;
      this.mapGlobalState.setMapState(this.mapEditorState)

    }

  }

}
