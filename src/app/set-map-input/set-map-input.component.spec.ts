import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetMapInputComponent } from './set-map-input.component';

describe('SetMapInputComponent', () => {
  let component: SetMapInputComponent;
  let fixture: ComponentFixture<SetMapInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetMapInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetMapInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
