import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TooltipDemo2Component } from './tooltip-demo-2.component';

describe('TooltipDemo2Component', () => {
  let component: TooltipDemo2Component;
  let fixture: ComponentFixture<TooltipDemo2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TooltipDemo2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TooltipDemo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
