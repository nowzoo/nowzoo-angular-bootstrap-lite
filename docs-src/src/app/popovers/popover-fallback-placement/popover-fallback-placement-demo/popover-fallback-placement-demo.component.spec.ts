import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopoverFallbackPlacementDemoComponent } from './popover-fallback-placement-demo.component';

describe('PopoverFallbackPlacementDemoComponent', () => {
  let component: PopoverFallbackPlacementDemoComponent;
  let fixture: ComponentFixture<PopoverFallbackPlacementDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopoverFallbackPlacementDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopoverFallbackPlacementDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
