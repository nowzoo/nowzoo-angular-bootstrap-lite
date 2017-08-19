import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TooltipPageHideOnRouteChangeComponent } from './popover-page-hide-on-route-change.component';

describe('TooltipPageHideOnRouteChangeComponent', () => {
  let component: TooltipPageHideOnRouteChangeComponent;
  let fixture: ComponentFixture<TooltipPageHideOnRouteChangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TooltipPageHideOnRouteChangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TooltipPageHideOnRouteChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
