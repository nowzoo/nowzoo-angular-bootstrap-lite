import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TooltipDemo0Component } from './tooltip-demo-0.component';

describe('TooltipDemo0Component', () => {
  let component: TooltipDemo0Component;
  let fixture: ComponentFixture<TooltipDemo0Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TooltipDemo0Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TooltipDemo0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
