import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopoverPlacementComponent } from './popover-placement.component';

describe('PopoverPlacementComponent', () => {
  let component: PopoverPlacementComponent;
  let fixture: ComponentFixture<PopoverPlacementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopoverPlacementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopoverPlacementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
