import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopoverFallbackPlacementComponent } from './popover-fallback-placement.component';

describe('PopoverFallbackPlacementComponent', () => {
  let component: PopoverFallbackPlacementComponent;
  let fixture: ComponentFixture<PopoverFallbackPlacementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopoverFallbackPlacementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopoverFallbackPlacementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
