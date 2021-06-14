import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapEditorTileComponent } from './map-editor-tile.component';

describe('MapEditorTileComponent', () => {
  let component: MapEditorTileComponent;
  let fixture: ComponentFixture<MapEditorTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapEditorTileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MapEditorTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
