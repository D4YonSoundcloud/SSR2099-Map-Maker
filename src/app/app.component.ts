import { Component } from '@angular/core';
import {TileTypeService} from "./services/tile-type.service";
import {MapStateService} from "./services/map-state.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SSR2099mapMaker';

  constructor(public tileType: TileTypeService, public mapGlobalState: MapStateService) { }
}
