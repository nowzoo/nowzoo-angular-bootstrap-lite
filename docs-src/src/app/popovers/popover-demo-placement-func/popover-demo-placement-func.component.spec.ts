import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopoverDemoPlacementFuncComponent } from './popover-demo-placement-func.component';

describe('PopoverDemoPlacementFuncComponent', () => {
  let component: PopoverDemoPlacementFuncComponent;
  let fixture: ComponentFixture<PopoverDemoPlacementFuncComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopoverDemoPlacementFuncComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopoverDemoPlacementFuncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
