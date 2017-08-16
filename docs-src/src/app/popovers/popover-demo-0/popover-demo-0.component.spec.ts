import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopoverDemo0Component } from './popover-demo-0.component';

describe('PopoverDemo0Component', () => {
  let component: PopoverDemo0Component;
  let fixture: ComponentFixture<PopoverDemo0Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopoverDemo0Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopoverDemo0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
