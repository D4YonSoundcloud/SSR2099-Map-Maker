import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TileTypeSelectComponent } from './tile-type-select.component';

describe('TileTypeSelectComponent', () => {
  let component: TileTypeSelectComponent;
  let fixture: ComponentFixture<TileTypeSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TileTypeSelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TileTypeSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
