import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopoverDemoDismissOnClickOutsideComponent } from './popover-demo-dismiss-on-click-outside.component';

describe('PopoverDemoDismissOnClickOutsideComponent', () => {
  let component: PopoverDemoDismissOnClickOutsideComponent;
  let fixture: ComponentFixture<PopoverDemoDismissOnClickOutsideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopoverDemoDismissOnClickOutsideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopoverDemoDismissOnClickOutsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
