import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopoverPageHideOnRouteChangeComponent } from './popover-page-hide-on-route-change.component';

describe('PopoverPageHideOnRouteChangeComponent', () => {
  let component: PopoverPageHideOnRouteChangeComponent;
  let fixture: ComponentFixture<PopoverPageHideOnRouteChangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopoverPageHideOnRouteChangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopoverPageHideOnRouteChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
