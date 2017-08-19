import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopoverDemoHideOnRouteChangeComponent } from './popover-demo-hide-on-route-change.component';

describe('PopoverDemoHideOnRouteChangeComponent', () => {
  let component: PopoverDemoHideOnRouteChangeComponent;
  let fixture: ComponentFixture<PopoverDemoHideOnRouteChangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopoverDemoHideOnRouteChangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopoverDemoHideOnRouteChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
