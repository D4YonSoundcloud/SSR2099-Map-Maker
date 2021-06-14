import { TestBed } from '@angular/core/testing';

import { TileTypeService } from './tile-type.service';

describe('TileTypeService', () => {
  let service: TileTypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TileTypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
