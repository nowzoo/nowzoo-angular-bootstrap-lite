import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TooltipDemo4Component } from './tooltip-demo-4.component';

describe('TooltipDemo4Component', () => {
  let component: TooltipDemo4Component;
  let fixture: ComponentFixture<TooltipDemo4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TooltipDemo4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TooltipDemo4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
