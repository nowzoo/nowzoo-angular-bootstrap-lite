import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopoverDemo1Component } from './popover-demo-1.component';

describe('PopoverDemo1Component', () => {
  let component: PopoverDemo1Component;
  let fixture: ComponentFixture<PopoverDemo1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopoverDemo1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopoverDemo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
