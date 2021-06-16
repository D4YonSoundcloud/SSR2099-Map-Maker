import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TileTypeSelectComponent } from './tile-type-select/tile-type-select.component';
import { MapEditorComponent } from './map-editor/map-editor.component';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MapEditorTileComponent } from './map-editor-tile/map-editor-tile.component'
import {SetMapInputComponent} from "./set-map-input/set-map-input.component";

@NgModule({
    declarations: [
        AppComponent,
        TileTypeSelectComponent,
        MapEditorComponent,
        MapEditorTileComponent,
        SetMapInputComponent
    ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
