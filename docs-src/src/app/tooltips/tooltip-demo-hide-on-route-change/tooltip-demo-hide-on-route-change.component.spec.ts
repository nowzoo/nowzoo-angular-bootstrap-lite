import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TooltipDemoHideOnRouteChangeComponent } from './tooltip-demo-hide-on-route-change.component';

describe('TooltipDemoHideOnRouteChangeComponent', () => {
  let component: TooltipDemoHideOnRouteChangeComponent;
  let fixture: ComponentFixture<TooltipDemoHideOnRouteChangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TooltipDemoHideOnRouteChangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TooltipDemoHideOnRouteChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
