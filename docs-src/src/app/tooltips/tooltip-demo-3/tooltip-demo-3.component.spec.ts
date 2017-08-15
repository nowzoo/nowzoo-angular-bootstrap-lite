import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TooltipDemo3Component } from './tooltip-demo-3.component';

describe('TooltipDemo3Component', () => {
  let component: TooltipDemo3Component;
  let fixture: ComponentFixture<TooltipDemo3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TooltipDemo3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TooltipDemo3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
