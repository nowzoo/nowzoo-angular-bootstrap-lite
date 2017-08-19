import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TooltipDemoPlacementFuncComponent } from './tooltip-demo-placement-func.component';

describe('TooltipDemoPlacementFuncComponent', () => {
  let component: TooltipDemoPlacementFuncComponent;
  let fixture: ComponentFixture<TooltipDemoPlacementFuncComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TooltipDemoPlacementFuncComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TooltipDemoPlacementFuncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
