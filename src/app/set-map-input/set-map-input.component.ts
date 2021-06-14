import { Component, OnInit } from '@angular/core';
import {MapStateService} from "../services/map-state.service";

@Component({
  selector: 'app-set-map-input',
  templateUrl: './set-map-input.component.html',
  styleUrls: ['./set-map-input.component.css']
})
export class SetMapInputComponent implements OnInit {

  newMapString:string = '';

  constructor(public mapGlobalState: MapStateService) { }

  ngOnInit(): void {
  }

  setNewMap(newMap:string) {
    console.log(newMap);
    this.mapGlobalState.getMapFromString(newMap)
    this.mapGlobalState.closeMapInput(false);
  }

}
